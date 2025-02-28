"use client";

import {BookType} from "@/@types";
import {useFetchFunc} from "@/hooks/useAxios";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

export const BooksComponent = () => {
	const searchParams = useSearchParams();
	const searchQuery = searchParams.get(`search`) || "";
	const categoryQuery = searchParams.get(`category`) || "";
	const [filteredBooks, setFilteredBooks] = useState<[]>([]);
	const [books, setBooks] = useState<[]>([]);
	const axios = useFetchFunc();
	useEffect(() => {
		axios({url: `/get/books?search=${searchQuery}&category=${categoryQuery}`})
			.then(({books}) => {
				setBooks(books);
				setFilteredBooks(books);
			})
			.catch((error) => console.error(error));
	}, [searchQuery, categoryQuery]);
	useEffect(() => {
		setFilteredBooks(books);
	}, [books]);
	return (
		<section className="grid grid-cols-5 gap-y-12 rounded-lg gap-8 mb-12 max-[1440px]:text-[0.7em] max-xl:grid-cols-4 max-xl:text-base max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:gap-4 max-[550px]:text-[0.75em] max-[550px]:gap-3 max-[430px]:text-[0.5em] max-[430px]:gap-2 max-[360px]:grid-cols-1">
			{filteredBooks?.length > 0 ? (
				filteredBooks.map((book: BookType) => (
					<div key={book._id} className="rounded-lg">
						<Image
							src={book.image}
							alt="image"
							width={300}
							height={300}
							className="w-full h-[24em] rounded-lg object-cover max-[1440px]:h-[30em] max-xl:h-[24em] max-[430px]:h-[32em] max-[360px]:h-[48em]"
						/>
						<p className="mt-2 text-2xl font-light px-2">
							{book.title?.slice(0, 18)}
						</p>
						<div className="flex items-center justify-between gap-4 mt-1 px-2">
							<p className="text-sm mt-1">
								{book.description?.slice(0, 65)}...
							</p>
						</div>
					</div>
				))
			) : (
				<Image
					src={`https://cdn-icons-png.flaticon.com/512/2748/2748558.png`}
					alt="image"
					width={500}
					height={500}
					className="w-full h-full rounded-lg object-cover"
				/>
			)}
		</section>
	);
};
