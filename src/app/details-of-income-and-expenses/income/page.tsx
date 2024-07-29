import IncomeDetails from '@/components/IncomeDetails'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "আয়ের হিসাব",
    description: "Generated by Arafat Foundation",
};

function page() {
    return (
        <div>
            <IncomeDetails />
        </div>
    )
}

export default page