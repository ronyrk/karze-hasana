import React, { Suspense } from 'react'
import icon from "../../public/divider.svg"
import Image from 'next/image'
import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from "@/components/ui/dialog"
import { GalleryCarousel } from '@/components/Gallery'
import { getGallery } from '@/lib/getGallery'
import HomeGallerySidebar from './HomeGallerySidebar'
import { Button } from '@/components/ui/button';
import Link from 'next/link'

async function GalleryList({ query }: { query: string }) {
	const data = await getGallery(query);
	return (
		<>
			{
				data.map((item, index) => (
					<Dialog key={index}>
						<DialogTrigger>
							<div className=" flex justify-center w-[308px] h-[288px] p-1">
								{
									item.category === "video" ? <iframe width="308" height="280" className='object-fill rounded-md' src={`${item.content}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe> : <Image src={item.content} className='rounded-md hover:opacity-90' width={308} height={208} alt={item.category} />
								}
							</div>
						</DialogTrigger>
						<DialogContent className='w-full '>
							<div className="flex justify-center">
								<GalleryCarousel query={query} />
							</div>
						</DialogContent>
					</Dialog>
				))
			}
		</>

	)
}


async function HomeGallery({ query }: {
	query: string
}) {
	return (
		<section id='gallery' className="bg-[#FCFCFD]">
			<div className="my-2 md:mx-20 md:my-4">
				<h1 className="py-2 text-4xl font-semibold text-center text-color-main">গ্যালারী</h1>
				<div className='flex flex-col items-center justify-center gap-2 py-3 '>
					<Image src={icon} alt='icon' />
				</div>
				<div className="flex flex-col gap-3">
					<Suspense fallback={<h2>Loading...</h2>}>
						<div className="">
							<HomeGallerySidebar />
						</div>
					</Suspense>
					<div className="rounded-md md:p-1">
						<div className="flex flex-row gap-1 md:gap-3">
							<Suspense fallback={<h2>Loading...</h2>}>
								<GalleryList query={query} />
							</Suspense>
						</div>
						<div className="flex justify-center py-4">
							<Button size={"lg"} className='text-black bg-white border-2 border-black hover:border-color-sub hover:bg-color-sub hover:text-white' asChild>
								<Link href="/gallery">আরো দেখুন</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeGallery