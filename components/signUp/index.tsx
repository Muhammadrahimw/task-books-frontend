"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useFetchFunc} from "@/hooks/useAxios";
import {useRef} from "react";

const SignUpFormComponent = () => {
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const axios = useFetchFunc();
	const signUpFunc = () => {
		const firstName = firstNameRef.current?.value;
		const lastName = lastNameRef.current?.value;
		const password = passwordRef.current?.value;
		const phone = phoneRef.current?.value;
		const email = emailRef.current?.value;
		console.log(firstName, lastName, password, phone, email);

		axios({
			url: `/auth/sign-up`,
			method: "POST",
			body: JSON.stringify({
				firstName,
				lastName,
				password,
				phone,
				email,
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};
	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()} className="w-[24em] ">
				<h2 className="text-[2.25em] font-bold">Sign up</h2>
				<p className="font-medium mt-2">
					Already have an account?
					<span className="text-blue-500"> Sign in</span>
				</p>
				<div className="mt-5 flex flex-col gap-4">
					<Input
						ref={firstNameRef}
						required
						placeholder="First Name"
						className="w-full h-12 rounded-lg"
					/>
					<Input
						ref={lastNameRef}
						required
						placeholder="Last Name"
						className="w-full h-12 rounded-lg"
					/>
					<Input
						ref={phoneRef}
						required
						placeholder="Phone"
						className="w-full h-12 rounded-lg"
					/>
					<Input
						ref={emailRef}
						required
						placeholder="Email"
						className="w-full h-12 rounded-lg"
					/>
					<Input
						ref={passwordRef}
						required
						placeholder="password"
						className="w-full h-12 rounded-lg"
					/>
				</div>
				<Button
					onClick={signUpFunc}
					className="bg-[#152540] mt-8 rounded-full w-full h-14 text-xl font-semibold cursor-pointer pb-[-2px]">
					Next Step
				</Button>
			</form>
		</div>
	);
};

export default SignUpFormComponent;
