"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useFetchFunc} from "@/hooks/useAxios";
import {useRef, useState} from "react";
import {AlertComponent} from "@/components/alert";

export const AddAuthorComponent = () => {
	const [alertVariant, setAlertVariant] = useState<"default" | "destructive">(
		"default"
	);
	const [alertMessage, setAlertMessage] = useState<string>("");

	const formRef = useRef<HTMLFormElement>(null);
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const dateRef = useRef<HTMLInputElement>(null);
	const dateofDeathRef = useRef<HTMLInputElement>(null);
	const countryRef = useRef<HTMLInputElement>(null);
	const bioRef = useRef<HTMLTextAreaElement>(null);

	const axios = useFetchFunc();

    
	const addAuthorFunc = () => {
		setAlertMessage("");
		const firstName = firstNameRef.current?.value?.trim() || "";
		const lastName = lastNameRef.current?.value?.trim() || "";
		const date = dateRef.current?.value?.trim() || "";
		const dateofDeath = dateofDeathRef.current?.value?.trim() || "";
		const country = countryRef.current?.value?.trim() || "";
		const bio = bioRef.current?.value?.trim() || "";

		if (firstName && lastName && date && country && bio) {
			axios({
				url: `/create/author`,
				method: "POST",
				body: JSON.stringify({
					firstName,
					lastName,
					date,
					dateofDeath,
					country,
					bio,
				}),
			})
				.then((response) => {
					if (response.status !== 201) {
						setAlertVariant("destructive");
						setAlertMessage(response.message);
						return;
					}
					formRef.current?.reset();
					setAlertVariant("default");
					setAlertMessage("Author added successfully!");
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
				className="w-[28em]">
				<h2 className="text-[2.25em] font-bold">Add a New Author</h2>
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
						ref={dateRef}
						required
						placeholder="Date of Birth"
						className="w-full h-12 rounded-lg"
					/>
					<Input
						ref={dateofDeathRef}
						placeholder="Date of Death (optional)"
						className="w-full h-12 rounded-lg"
					/>
					<Input
						ref={countryRef}
						required
						placeholder="Country"
						className="w-full h-12 rounded-lg"
					/>
					<Textarea
						ref={bioRef}
						required
						placeholder="Biography"
						className="w-full h-20 rounded-lg"
					/>
				</div>
				<Button
					onClick={addAuthorFunc}
					className="bg-[#152540] mt-8 rounded-full w-full h-14 text-xl font-semibold">
					Add Author
				</Button>
			</form>
		</div>
	);
};
