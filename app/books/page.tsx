import {BooksComponent} from "@/components/books";
import {CategoryComponent} from "@/components/category";
import {SearchComponent} from "@/components/search";
import Image from "next/image";

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
			<SearchComponent />
			<div className="flex items-center justify-center flex-col mt-[2em] translate-y-[-3em]">
				<CategoryComponent />
			</div>
			<BooksComponent />
		</section>
	);
};

export default Books;
