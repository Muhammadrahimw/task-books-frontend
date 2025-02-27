import {AddBookComponent} from "@/components/addBook";
import Image from "next/image";

const AddBook = () => {
	return (
		<section className="grid grid-cols-2">
			<div className="w-full p-8 flex items-center justify-center bg-[#C9AC8CED] h-screen">
				<Image
					src={"/imgs/3.png"}
					width={400}
					height={400}
					alt="Image"
					className="w-full max-h-screen object-contain p-10"
					priority
				/>
			</div>
			<div className="flex items-center justify-center w-full">
				<AddBookComponent />
			</div>
		</section>
	);
};

export default AddBook;
