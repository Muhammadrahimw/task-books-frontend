"use client";

import {SearchIcon} from "lucide-react";
import {Button} from "../ui/button";
import {Input} from "../ui/input";
import {useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";

export const SearchComponent = () => {
	const router = useRouter();
	const [search, setSearch] = useState<string>("");
	const searchParams = useSearchParams();
	const categoryQuery = searchParams.get(`category`) || "";
	const handleSearch = () => {
		if (search.trim()) {
			const sanitizedQuery = search.replace(/[^a-zA-Z0-9 ]/g, "");
			router.push(`/books?search=${sanitizedQuery}&category=${categoryQuery}`);
		} else {
			router.push(`/books?search=&category=${categoryQuery}`);
		}
	};
	return (
		<div className="w-[85%] mx-auto flex-col flex items-center justify-center gap-4 p-8 rounded-xl bg-white dark:bg-[#111111] pb-10 translate-y-[-3em] shadow-xl">
			<h2 className="text-[1.5em] font-light text-gray-900 dark:text-white">
				Qidirish
			</h2>
			<div className="w-[70%] h-12 flex items-center justify-between gap-4 max-lg:w-full max-sm:flex-col max-sm:min-h-20">
				<Input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSearch()}
					className="w-full h-full rounded-lg pl-4 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#222222] text-gray-900 dark:text-white"
					placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
				/>
				<Button
					onClick={handleSearch}
					className="h-full w-[14em] max-sm:w-full rounded-lg bg-[#C9AC8C] text-white hover:bg-[#b09070] transition">
					<SearchIcon />
					Izlash
				</Button>
			</div>
		</div>
	);
};
