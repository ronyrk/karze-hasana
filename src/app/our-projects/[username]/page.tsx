import Image from 'next/image';
import React from 'react'
import { CircleUserRound, CalendarDays } from 'lucide-react';
import { Share } from '@/components/Share';
import { CarouselDemo } from '@/components/CarouselType';
import DonorCard from '@/components/DonorCard';

function page({ params }: {
	params: {
		username: string
	}
}) {
	const username = params.username;

	return (
		<div className='py-4 px-1'>
			<div className="flex md:flex-row flex-col gap-1">
				<div className="md:basis-3/4 w-full px-2">
					<Image src="/Ramadan-activities.jpg" width={828} height={420} className='md:w-[828px] md:h-[420px] object-fill rounded' alt='home' />
					<div className="py-2 flex flex-row gap-2">
						<h2 className=' flex items-center'><CircleUserRound size={20} /> <span className=' text-sm font-medium px-2'>Abdullah Al Mamun</span> </h2>
						<h2 className=' flex items-center'><CalendarDays size={20} /> <span className=' text-sm font-medium px-2'>January 29, 2024</span> </h2>
					</div>
					<div className="py-3">
						<h2 className=" text-[26px] text-color-main font-semibold">রমজান প্রজেক্ট ২০২৪</h2>
					</div>
					<div className="p-2">
						<p className=" text-sm  font-medium leading-relaxed">
							আসসালামু আলাইকুম।
							আলহামদুলিল্লাহ, আর অল্প কিছুদিন পরেই আমরা আরো একটা পবিত্র রমজান মাস পেতে যাচ্ছি।
							এই রমজান মাসে আমরা প্রতিদিন ৫০/১০০ জন অসহায়/সুবিধাবঞ্চিত/দিনমুজুর মানুষকে সেহরি/ইফতার করানোর পরিকল্পনা করছি।

							রমজান ২০২৪ প্রজেক্টটি রোজার মাসে দরিদ্র / নিম্নআয়ের মানুষদের সেহরি/ইফতার করানোর জন্য আগ্রহী সামর্থ্যবানদের জন্য ১টি ইভেন্ট।
							মার্চ মাসের প্রথম সপ্তাহের আগেই সাদাকাহ হিসাবে এই প্রজেক্টে দান গ্রহণ করা হবে । প্রবাসীদের ক্ষেত্রে যেহেতু উনাদের টাকা বৈধভাবে দেশে পৌঁছাতে সময় লাগে, উনাদের মার্চের ১০ তারিখের মধ্যে দান সম্পন্ন করতে হবে।


							প্রজেক্ট ডিটেলস :
							এই প্রজেক্টে সারা দেশের বিভিন্ন জেলাতে(প্রতিদিন একটি জেলাতে) রোজার ৩০ দিন দরিদ্র / নিম্নআয়ের মানুষদের সেহরি/ইফতার করানো হবে। এই সেহরি/ইফতার রান্না করা খাবার প্যাকেট হিসাবে বিতরণ করা হবে। ইনশাআল্লাহ


							কি খাওয়ানো হবে ?
							খুবই সামান্য উপাদান – ১ প্যাকেট রান্না করা খাবার। দিনভেদে কোনোদিন ডিম্ খিচুড়ি, কোনোদিন তেহারি, কখনো ভাত-মাংস অথবা মুরগি ইত্যাদি। এই ১টি প্যাকেটই যেন একজন রোজাদারের সেহরি হিসাবে পেট ভরে খেতে পারে, সেদিকে লক্ষ্য রাখার চেষ্টা থাকবে।

							খরচ এর প্ল্যান:-
							রান্না করা খাবার এর রসদ, প্যাকেট এর খরচ, পরিবহন খরচ, রাঁধুনির খরচ ইত্যাদি সব কিছু চিন্তা করে আমরা আনুমানিক প্রতি জনে প্যাকেট প্রতি ১১০/= টাকা / ১ USD ধরেছি। সামর্থ্যবান যারা আছেন অথবা যারা একজনের অধিক মানুষকে সেহরি/ইফতার করবেন, তারা একাধিক প্যাকেট নিয়ে ১১০/= টাকা/ ১ USD এর গুণিতক হিসাবে দিবেন। যেমন ১১,০০০/টাকা/১০০ USD দান করলে ১০০ জন মানুষ সেহরি/ইফতার করবে।

							টার্গেট :-
							প্রতিদিন কমপক্ষে ১০০ জন। (৩০ দিন)
							৩ হাজার মানুষ ।
							১টি ইফতার প্যাকেট এর খরচ ১১০ টাকা/ ১ USD।

							অনুদান পাঠানোর ইনফো :-
							bKash Number: 01738115411 (Send Money)
							Islami Bank Bangladesh Ltd
							A/C Number: 20501130203541208
							A/C Name: Abdullah Al Mamun
							Branch Name: Rajshahi
							Routing Number: 125811932
							SWIFT Code: IBBLBDDH113

							লক্ষ্য করুন :-

							আপনি যে কয়টি প্যাকেট এর জন্য নিয়ত করতে চান, তা এই ইভেন্ট এর ইনবক্স এ অথবা যে কোনো কমেন্ট এ লিখুন। (প্রতি প্যাকেট ১১০/=টাকা/ ১ USD  = ১ জনের সেহরি/ইফতার। ১০০ জন মানুষের সেহরি/ইফতার = ১১,০০০/=টাকা/ ১০০ USD
							আপনি টাকা পাঠানো সম্পন্ন করলে, তখন আমার ব্যক্তিগত ফেসবুক / হোয়াটস্যাপ এর ইনবক্স এ আপনার টাকা পাঠানোর যে কোনো প্রমান ১টা রিসিপ্ট/ স্ক্রিনশট / ম্যাসাজ শেয়ার করবেন। ( তারিখ / ট্রান্সাকশন আইডি সহ)
							৪৮ ঘন্টার মধ্যে আপনার ডোনার সিরিয়েল এবং কোড নামের পাশে “পেইড” লিখা উঠেছে কিনা লক্ষ্য রাখুন। পেইড লিখা উঠলে আপনি বুঝে নিবেন আপনার টাকা আমাদের ফান্ড এ ঢুকেছে। না উঠলে আমার সাথে ( Whatapp 01602505070। টাকা পাঠানোর সাথে সাথে দয়া করে কল করে কন্ফার্ম হতে চাইবেন না। আপনি মেসেজ দিয়ে রাখুন , ইনশাল্লাহ ৪৮ ঘন্টার মধ্যে কনফার্মেশন পাবেন।
							এই টার্গেট পূরণে আপনাদের সাহায্য লাগবে। ইভেন্টটি পাবলিক করা থাকবে, আপনারা ইচ্ছা করলে ইভেন্টটি নিজেদের ওয়াল এ শেয়ার এবং আগ্রহী পরিচিতজনদের ইনভাইটের মাধ্যমে এখানে সংযুক্ত করতে পারবেন।
						</p>
						<div className="py-3">
							<Share type='our-projects' username='username' />
						</div>
					</div>
				</div>
				<div className=" md:basis-1/4 w-full p-2">
					<DonorCard />
				</div>
			</div>
			<CarouselDemo />
		</div>
	)
}

export default page