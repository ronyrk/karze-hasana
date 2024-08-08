import React, { Suspense } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { LoanIProps, PaymentIProps } from '@/types';
import { unstable_noStore } from 'next/cache';
import { Metadata } from 'next';
import SearchBox from '@/components/SearchBox';
import { getSearchBorrowers } from '@/lib/SearchBorrowers';
import PaginationPart from '@/components/Pagination';
import { getBorrowers } from '@/lib/getBorrowers';

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
	title: "Borrowers List",
	description: "Generated by Rakibul hasan",
};

function SearchBarFallback() {
	return <>placeholder</>
}
async function duePayment(username: string, balance: string) {
	unstable_noStore();
	const response = await fetch(`https://af-admin.vercel.app/api/loan_list/${username}`);
	if (!response.ok) {
		throw new Error("Failed to fetch data due payment");
	}
	const paymentList: PaymentIProps[] = await response.json();

	let indexPaymentString2: string[] = ["0"];
	paymentList.forEach((item) => indexPaymentString2.push(item.loanAmount));
	let indexPayment2 = indexPaymentString2.map(Number);
	const totalBalance = indexPayment2.reduce((accumulator, currentValue) => accumulator + currentValue, Number(balance));

	let indexPaymentString: string[] = ["0"];
	const result = paymentList.forEach((item) => indexPaymentString.push(item.amount));
	let indexPayment = indexPaymentString.map(Number);
	const loanSumAmount = indexPayment.reduce((accumulator, currentValue) => accumulator - currentValue, totalBalance);
	return `${loanSumAmount}`;

}

async function allPayment(username: string) {
	unstable_noStore();
	const response = await fetch(`https://af-admin.vercel.app/api/loan_list/${username}`);
	if (!response.ok) {
		throw new Error("Failed to fetch data all payment");
	}
	const paymentList: PaymentIProps[] = await response.json();

	let indexPaymentString: string[] = ["0"];
	const result = paymentList.forEach((item) => indexPaymentString.push(item.amount));
	let indexPayment = indexPaymentString.map(Number);
	const Amount = indexPayment.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	return `${Amount}`;

}
const TotalDisbursed = async (username: string, balance: string) => {
	unstable_noStore();
	const response = await fetch(`https://af-admin.vercel.app/api/loan_list/${username}`);
	if (!response.ok) {
		throw new Error("Failed to fetch data all payment");
	}
	const paymentList: PaymentIProps[] = await response.json();

	let indexPaymentString: string[] = ["0"];
	const result = paymentList.forEach((item) => indexPaymentString.push(item.loanAmount));
	let indexPayment = indexPaymentString.map(Number);
	const loanSumAmount = indexPayment.reduce((accumulator, currentValue) => accumulator + currentValue, Number(balance));
	return `${loanSumAmount}`;
}


async function BorrowersList({ searchParams }: {
	searchParams?: {
		search?: string,
		page?: string,
	}
}) {
	const query = searchParams?.search || "all";
	const page = searchParams?.page || "1";

	try {
		const borrowers = await getSearchBorrowers(query, page);
		const pageNumber = await getBorrowers(query);
		const length = pageNumber?.length;

		return (
			<TableBody>
				{
					borrowers.map((item, index: number) => (
						<TableRow key={index}>
							<TableCell className="font-medium">{item?.code}</TableCell>
							<TableCell className="font-medium uppercase">{item?.name}</TableCell>
							<TableCell className="font-medium uppercase" >{TotalDisbursed(item.username, item.balance)}</TableCell>
							<TableCell className="font-medium uppercase">{allPayment(item?.username)}</TableCell>
							<TableCell className="font-medium uppercase">{duePayment(item?.username, item.balance)}</TableCell>
							<TableCell className="font-medium uppercase">
								<Button className='bg-color-sub' size={"sm"} asChild>
									<Link href={`borrowers/${item?.username}`}>details</Link>
								</Button>
							</TableCell>
						</TableRow>
					))
				}
			</TableBody>
		)
	} catch (error) {
		throw new Error("Failed Data fetch");
	}
};



async function page({ searchParams }: {
	searchParams?: {
		search?: string,
		page?: string,
	}
}) {
	const query = searchParams?.search || "all";
	try {
		const pageNumber = await getBorrowers(query);
		const length = pageNumber?.length;
		return (
			<div className='flex flex-col'>
				<Suspense fallback={<SearchBarFallback />}>
					<SearchBox />
				</Suspense>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>CODE</TableHead>
							<TableHead className='w-[300px]'>BORROWERS NAME</TableHead>
							<TableHead>DISBURSED</TableHead>
							<TableHead>RECOVERED</TableHead>
							<TableHead>BALANCE</TableHead>
							<TableHead>DETAILS</TableHead>
						</TableRow>
					</TableHeader>
					<Suspense fallback={<h2 className=' text-center p-4'>Loading...</h2>} >
						<BorrowersList searchParams={searchParams} />
					</Suspense>
				</Table>
				<div className="flex justify-center py-2">
					<PaginationPart item={10} data={length} />
				</div>

			</div>
		)
	} catch (error) {
		throw new Error("Data fetch failed");
	}
}

export default page