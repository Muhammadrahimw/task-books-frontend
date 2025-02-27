import SignUpFormComponent from "@/components/signUp";
import Image from "next/image";

const SignUp = () => {
	return (
		<section className="grid grid-cols-2">
			<div className="w-full p-8 flex items-center justify-center bg-[#C9AC8CED] h-screen">
				<Image
					src={"/imgs/2.png"}
					width={1000}
					height={1000}
					alt="Image"
					className="w-full"
					priority
				/>
			</div>
			<div className="flex items-center justify-center w-full">
				<SignUpFormComponent />
			</div>
		</section>
	);
};

export default SignUp;
