"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useFetchFunc} from "@/hooks/useAxios";
import {useRef, useState} from "react";
import {AlertComponent} from "../alert";
import {useRouter} from "next/navigation";

export const SignInComponent = () => {
	const [alertVariant, setAlertVariant] = useState<"default" | "destructive">(
		"default"
	);
	const [alertMessage, setAlertMessage] = useState<string>("");
	const formRef = useRef<HTMLFormElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const axios = useFetchFunc();
	const router = useRouter();

	const signInFunc = async () => {
		setAlertMessage("");
		const email = emailRef.current?.value?.trim() || "";
		const password = passwordRef.current?.value?.trim() || "";

		if (email && password) {
			axios({
				url: `/auth/sign-in`,
				method: "POST",
				body: JSON.stringify({email, password}),
			})
				.then((response) => {
					if (response.status !== 200) {
						setAlertVariant("destructive");
						setAlertMessage(response.message);
						return;
					}
					setAlertVariant("default");
					setAlertMessage(response.message);
					formRef.current?.reset();
					if (response.status === 200) {
						router.push("/books");
					}
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
				<h2 className="text-[2.25em] font-bold">Sign in</h2>
				<p className="font-medium mt-2">
					Don't have an account?
					<span
						onClick={() => router.push(`/sign-up`)}
						className="text-blue-500 cursor-pointer">
						{" "}
						Sign up
					</span>
				</p>
				<div className="mt-5 flex flex-col gap-4">
					<Input
						ref={emailRef}
						required
						placeholder="Email"
						className="w-full h-12 rounded-lg"
					/>
					<Input
						ref={passwordRef}
						required
						type="password"
						placeholder="Password"
						className="w-full h-12 rounded-lg"
					/>
				</div>
				<Button
					onClick={signInFunc}
					className="bg-[#152540] mt-8 rounded-full w-full h-14 text-xl font-semibold cursor-pointer">
					Sign In
				</Button>
			</form>
		</div>
	);
};
