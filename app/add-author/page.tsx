import {AddAuthorComponent} from "@/components/addAuthor";
import Image from "next/image";

const AddAuthor = () => {
	return (
		<section className="grid grid-cols-2">
			<div className="w-full p-8 flex items-center justify-center bg-[#F3F3F3ED] h-screen">
				<Image
					src={"/imgs/4.png"}
					width={400}
					height={400}
					alt="Image"
					className="w-full max-h-screen object-contain p-10"
					priority
				/>
			</div>
			<div className="flex items-center justify-center w-full">
				<AddAuthorComponent />
			</div>
		</section>
	);
};

export default AddAuthor;
