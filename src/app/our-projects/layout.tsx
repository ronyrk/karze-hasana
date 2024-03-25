import type { Metadata } from "next";



export const metadata: Metadata = {
	title: "আমাদের প্রকল্পসমূহ",
	description: "Generated by Arafat Foundation",
};

export default function OurProjectsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className="bg-[#FCFCFD]">
			<div className="md:px-20 md:py-4 py-2">
				{children}
			</div>
		</section>
	);
}
