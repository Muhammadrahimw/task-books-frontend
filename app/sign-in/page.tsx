import {SignInComponent} from "@/components/signIn";
import Image from "next/image";

const Login = () => {
	return (
		<section className="grid grid-cols-2">
			<div className="w-full p-8 flex items-center justify-center bg-[#C9AC8CED] h-screen">
				<Image
					src={"/imgs/1.png"}
					width={1000}
					height={1000}
					alt="Image"
					className="w-full"
					priority
				/>
			</div>
			<div className="flex items-center justify-center w-full">
				<SignInComponent />
			</div>
		</section>
	);
};

export default Login;
