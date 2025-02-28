"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useFetchFunc} from "@/hooks/useAxios";
import {useEffect, useRef, useState} from "react";
import {AlertComponent} from "../alert";
import {useRouter} from "next/navigation";

const SignUpFormComponent = () => {
	const [alertVariant, setAlertVariant] = useState<"default" | "destructive">(
		"default"
	);
	const [alertMessage, setAlertMessage] = useState<string>("");
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const formRef = useRef<HTMLFormElement>(null);
	const router = useRouter();
	const axios = useFetchFunc();
	const signUpFunc = () => {
		setAlertMessage("");
		const firstName = firstNameRef.current?.value?.trim() || "";
		const lastName = lastNameRef.current?.value?.trim() || "";
		const password = passwordRef.current?.value?.trim() || "";
		const phone = phoneRef.current?.value?.trim() || "";
		const email = emailRef.current?.value?.trim() || "";
		if (firstName && lastName && password && phone && email) {
			axios({
				url: `/auth/sign-up`,
				method: "POST",
				body: JSON.stringify({
					firstName: firstName,
					lastName: lastName,
					email: email,
					phone: phone,
					password: password,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((response) => {
					console.log(response);

					if (response.status !== 200) {
						setAlertVariant("destructive");
						setAlertMessage(response.message);
						return;
					}
					formRef.current?.reset();
					setAlertVariant("default");
					setAlertMessage(response.message);
				})
				.catch((error) => {
					console.log(error);

					if (!alertMessage) {
						setAlertVariant("destructive");
						setAlertMessage(error.message || "Request failed");
					}
				});
		}
	};
	return (
		<div>
			{alertMessage && (
				<AlertComponent variant={alertVariant} message={alertMessage} />
			)}
			<form
				ref={formRef}
				onSubmit={(e) => e.preventDefault()}
				className="w-[24em] ">
				<h2 className="text-[2.25em] font-bold">Sign up</h2>
				<p className="font-medium mt-2">
					Already have an account?
					<span
						onClick={() => router.push(`/sign-in`)}
						className="text-blue-500 cursor-pointer">
						{" "}
						Sign in
					</span>
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
