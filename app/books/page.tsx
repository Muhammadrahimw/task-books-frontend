import {BooksComponent} from "@/components/books";
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
			<div className="flex items-center justify-center flex-col mt-[2em]">
				<h2 className="text-[2em]">Asosiy kategoriyalar</h2>
				<div className="flex items-center justify-center gap-16 mt-5 text-xl font-medium">
					<p>Temuriylar davri</p>
					<p>Jadid adabiyoti </p>
					<p>Sovet davri </p>
					<p>Mustaqillik davri</p>
				</div>
			</div>
			<BooksComponent />
		</section>
	);
};

export default Books;
