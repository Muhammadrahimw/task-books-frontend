"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useFetchFunc} from "@/hooks/useAxios";
import {useEffect, useRef, useState} from "react";
import {AlertComponent} from "@/components/alert";
import {CategorySelectComponent} from "./category";

export const AddBookComponent = () => {
	const [alertVariant, setAlertVariant] = useState<"default" | "destructive">(
		"default"
	);
	const [alertMessage, setAlertMessage] = useState<string>("");

	const formRef = useRef<HTMLFormElement>(null);
	const titleRef = useRef<HTMLInputElement>(null);
	const pagesRef = useRef<HTMLInputElement>(null);
	const yearRef = useRef<HTMLInputElement>(null);
	const priceRef = useRef<HTMLInputElement>(null);
	const countryRef = useRef<HTMLInputElement>(null);
	const authorRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);
	const axios = useFetchFunc();
	useEffect(() => {
		localStorage.removeItem(`imageUrl`);
		localStorage.removeItem(`selectedCategory`);
	}, []);

	const addBookFunc = () => {
		setAlertMessage("");
		const title = titleRef.current?.value?.trim() || "";
		const pages = pagesRef.current?.value?.trim() || "";
		const year = yearRef.current?.value?.trim() || "";
		const price = priceRef.current?.value?.trim() || "";
		const country = countryRef.current?.value?.trim() || "";
		const author = authorRef.current?.value?.trim() || "";
		const description = descriptionRef.current?.value?.trim() || "";
		const category = localStorage.getItem(`selectedCategory`) || "";
		const image = localStorage.getItem(`imageUrl`) || "";

		if (title && pages && year && price && country && author && description) {
			axios({
				url: `/create/book`,
				method: "POST",
				body: JSON.stringify({
					title,
					pages,
					year,
					price,
					country,
					author,
					description,
					category,
					image,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((response) => {
					if (response.status !== 201) {
						setAlertVariant("destructive");
						setAlertMessage(response.message);
						return;
					}
					formRef.current?.reset();
					setAlertVariant("default");
					setAlertMessage("Book added successfully!");
					localStorage.removeItem(`imageUrl`);
					localStorage.removeItem(`selectedCategory`);
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
		<div className="w-full px-8 max-md:text-[0.7em] max-sm:py-10">
			{alertMessage && (
				<AlertComponent variant={alertVariant} message={alertMessage} />
			)}
			<form
				ref={formRef}
				onSubmit={(e) => e.preventDefault()}
				className="w-[28em] max-xl:w-full mx-auto">
				<h2 className="text-[2.25em] font-bold">Add a New Book</h2>
				<div className="mt-5 flex flex-col gap-4">
					<Input
						ref={titleRef}
						required
						placeholder="Title"
						className="w-full h-12 rounded-lg"
					/>
					<Input
						ref={pagesRef}
						required
						placeholder="Pages"
						className="w-full h-12 rounded-lg"
					/>
					<Input
						ref={yearRef}
						required
						placeholder="Year"
						className="w-full h-12 rounded-lg"
					/>
					<Input
						ref={priceRef}
						required
						placeholder="Price"
						className="w-full h-12 rounded-lg"
					/>
					<Input
						ref={countryRef}
						required
						placeholder="Country"
						className="w-full h-12 rounded-lg"
					/>
					<Input
						ref={authorRef}
						required
						placeholder="Author"
						className="w-full h-12 rounded-lg"
					/>
					<CategorySelectComponent />
					<Textarea
						ref={descriptionRef}
						required
						placeholder="Description"
						className="w-full h-20 rounded-lg"
					/>
				</div>
				<Button
					onClick={addBookFunc}
					className="bg-[#152540] mt-8 rounded-full w-full h-14 text-xl font-semibold">
					Add Book
				</Button>
			</form>
		</div>
	);
};
