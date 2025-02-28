"use client";

import {Input} from "@/components/ui/input";
import {useFetchFunc} from "@/hooks/useAxios";
import {Loader2} from "lucide-react";
import Image from "next/image";
import {useRef, useState} from "react";

export const UploadImageComponentAuthor = () => {
	const [imagePath, setImagePath] = useState<string>("/imgs/4.png");
	const [loading, setLoading] = useState<boolean>(false);
	const imageRef = useRef<HTMLInputElement>(null);
	const axios = useFetchFunc();
	const uploadImage = async () => {
		localStorage.removeItem(`imageUrlAuthor`);
		setLoading(true);
		if (imageRef.current?.files?.length) {
			const file = imageRef.current.files[0];
			const formData = new FormData();
			formData.append("image", file);
			axios({url: `/upload`, method: "POST", body: formData})
				.then((response) => {
					if (response.imageUrl) {
						setImagePath(response.imageUrl);
						setLoading(false);
						localStorage.setItem(`imageUrlAuthor`, response.imageUrl);
					}
				})
				.catch((error) => {
					console.error(error);
					setLoading(false);
					localStorage.removeItem(`imageUrlAuthor`);
				});
		}
	};
	return (
		<div className="w-full flex flex-col items-center justify-center bg-[#708090] p-8">
			<div className="w-[600px] h-[calc(100vh-13.8em)] flex items-center justify-center overflow-hidden relative max-xl:w-[400px] max-[900px]:w-[300px] max-sm:w-full">
				<Loader2
					className={`w-16 h-16 animate-spin text-[#152540] absolute ${
						loading ? `block` : `hidden`
					}`}
				/>
				<Image
					src={imagePath}
					width={400}
					height={400}
					alt="Uploaded Image"
					className={`w-full h-full object-contain ${
						loading ? `opacity-30` : ""
					}`}
					priority
				/>
			</div>

			<div
				className="w-[20em] max-lg:w-full h-14 mt-6 rounded-full bg-[#152540] text-white cursor-pointer flex items-center justify-center text-[1.5em] transition hover:bg-[#1c374d] pb-[4px]"
				onClick={() => imageRef.current?.click()}>
				<Input
					ref={imageRef}
					onChange={uploadImage}
					type="file"
					className="hidden"
				/>
				{loading ? "Loading..." : "Upload Image"}
			</div>
		</div>
	);
};
