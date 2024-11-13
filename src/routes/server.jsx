"use client";
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import TextChannel from './[…slug]/page';
import ServerSidebar from '../../components/ServerSidebar';

export default function Server() {
    const { slug } = useParams();
    const router = useRouter();

    useEffect(() => {
        router.push(`/${slug}/a`);
    }, [slug, router]);

    return (
        <div className="flex flex-row h-screen bg-slate-800 w-full">
            <ServerSidebar />
            <TextChannel />
        </div>
    );
}