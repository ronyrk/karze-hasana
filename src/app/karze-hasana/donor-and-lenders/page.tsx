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
import { Input } from '@/components/ui/input';
import { Metadata } from 'next';
import { TotalAmount } from '@/lib/totalAmount';
import { allReturnAmount } from '@/lib/allReturnAmount';
import { getStatus } from '@/lib/getStatus';
import { getSearchDonor } from '@/lib/SearchDonor';
import SearchBox from '@/components/SearchBox';
import { getDonor } from '@/lib/getDonor';
import PaginationPart from '@/components/Pagination';

export const metadata: Metadata = {
	title: "Donor List",
	description: "Generated by Rakibul hasan",
};

async function DonorList({ searchParams }: {
	searchParams?: {
		search?: string,
		page?: string,
	}
}) {
	const query = searchParams?.search || "all";
	const page = searchParams?.page || "1";
	try {
		const donors = await getSearchDonor(query, page);

		return (
			<TableBody>
				{
					donors.map((item, index: number) => (
						<TableRow key={index}>
							<TableCell className="font-medium">{item.code}</TableCell>
							<TableCell className="font-medium uppercase">{item.name}</TableCell>
							<TableCell className="font-medium uppercase" >{TotalAmount(item.status, item.username)}</TableCell>
							<TableCell className="font-medium uppercase" >{allReturnAmount(item.status, item.username)}</TableCell>
							<TableCell className="font-medium uppercase">{getStatus(item?.status)}</TableCell>
							<TableCell className="font-medium uppercase">
								<Button className='bg-color-sub' size={"sm"} asChild>
									<Link href={`donor-and-lenders/${item.username}`}>DETAILS</Link>
								</Button>

							</TableCell>
						</TableRow>
					))
				}
			</TableBody>
		)
	} catch (error) {
		throw new Error("Data fetch failed");
	}
};

function SearchBarFallback() {
	return <>placeholder</>
}


async function page({ searchParams }: {
	searchParams?: {
		search?: string,
		page?: string,
	}
}) {
	const query = searchParams?.search || "all";
	const pageNumber = await getDonor(query);
	const length = pageNumber?.length;
	try {
		return (
			<div className='flex flex-col'>
				<Suspense fallback={<SearchBarFallback />}>
					<SearchBox />
				</Suspense>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>CODE</TableHead>
							<TableHead className='w-[300px]'>NAME</TableHead>
							<TableHead>AMOUNT</TableHead>
							<TableHead>RETURNED AMOUNT</TableHead>
							<TableHead>TYPE</TableHead>
							<TableHead>DETAILS</TableHead>
						</TableRow>
					</TableHeader>
					<Suspense fallback={<h2 className=' text-center p-4'>Loading...</h2>} >
						<DonorList searchParams={searchParams} />
					</Suspense>
				</Table>
				<div className="flex justify-center py-4">
					<PaginationPart item={10} data={length} />
				</div>
			</div>
		)
	} catch (error) {
		throw new Error("Data fetch Error Page Number");
	}
}

export default page