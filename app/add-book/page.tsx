import {AddBookComponent} from "@/components/addBook";
import {UploadImageComponent} from "@/components/addBook/image";

const AddBook = () => {
	return (
		<section className="grid grid-cols-2">
			<div className="">
				<UploadImageComponent />
			</div>
			<div className="flex items-center justify-center w-full">
				<AddBookComponent />
			</div>
		</section>
	);
};

export default AddBook;
