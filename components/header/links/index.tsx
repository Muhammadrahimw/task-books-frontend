"use client";

import {useRouter} from "next/navigation";

export const NavLinksItem = () => {
	const router = useRouter();
	return (
		<nav className="flex items-center gap-12">
			<p onClick={() => router.push(`/books`)} className="cursor-pointer">Bosh sahifa</p>
			<p onClick={() => router.push(`/add-author`)} className="cursor-pointer">Author qo'shish</p>
			<p onClick={() => router.push(`/add-book`)} className="cursor-pointer">Kitob qo'shish</p>
			<p onClick={() => router.push(`/book`)} className="cursor-pointer">Maqolalar</p>
			<p onClick={() => router.push(`/book`)} className="cursor-pointer">Forum</p>
		</nav>
	);
};
