"use server";
import { unstable_noStore } from "next/cache";
import prisma from "./prisma";

export async function getSearchTeamMemberAdvisor(page: string) {
    const pageNumber = Number(page) - 1;
    const take = 10;
    const skip = take * pageNumber;

    unstable_noStore();
    const result = await prisma.owner.findMany({
        where: {
            type: "ADVISOR"
        },
        skip,
        take,
    });
    return result;
};
export async function getSearchTeamMemberFounder(page: string) {
    const pageNumber = Number(page) - 1;
    const take = 10;
    const skip = take * pageNumber;

    unstable_noStore();
    const result = await prisma.owner.findMany({
        where: {
            type: "FOUNDER"
        },
        skip,
        take,
    });
    return result;
};
export async function getSearchTeamMemberOwner(page: string) {
    const pageNumber = Number(page) - 1;
    const take = 10;
    const skip = take * pageNumber;

    unstable_noStore();
    const result = await prisma.owner.findMany({
        where: {
            type: "OWNER"
        },
        skip,
        take,
    });
    return result;
};