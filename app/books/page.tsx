import {BooksComponent} from "@/components/books";
import {CategoryComponent} from "@/components/category";
import {SearchComponent} from "@/components/search";
import Image from "next/image";
import {Suspense} from "react";

const Books = () => {
	return (
		<section className="w-[95%] mx-auto">
			<Image
				src={`/imgs/showcase.png`}
				alt="image"
				width={2000}
				height={2000}
				className="w-full mt-8"
			/>
			<Suspense fallback={<div className="text-3xl">Loading...</div>}>
				<SearchComponent />
			</Suspense>
			<div className="flex items-center justify-center flex-col mt-[2em] translate-y-[-3em]">
				<Suspense fallback={<div className="text-3xl">Loading...</div>}>
					<CategoryComponent />
				</Suspense>
			</div>
			<Suspense fallback={<div className="text-3xl">Loading...</div>}>
				<BooksComponent />
			</Suspense>
		</section>
	);
};

export default Books;
