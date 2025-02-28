import {AddAuthorComponent} from "@/components/addAuthor";
import {UploadImageComponentAuthor} from "@/components/addAuthor/image";

const AddAuthor = () => {
	return (
		<section className="grid grid-cols-2 max-sm:grid-cols-1">
			<div className="">
				<UploadImageComponentAuthor />
			</div>
			<div className="flex items-center justify-center w-full">
				<AddAuthorComponent />
			</div>
		</section>
	);
};

export default AddAuthor;
