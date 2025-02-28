"use client";

import {Input} from "@/components/ui/input";
import {useFetchFunc} from "@/hooks/useAxios";
import {Loader2} from "lucide-react";
import Image from "next/image";
import {useRef, useState} from "react";

export const UploadImageComponent = () => {
	const [imagePath, setImagePath] = useState<string>("/imgs/3.png");
	const [loading, setLoading] = useState<boolean>(false);
	const imageRef = useRef<HTMLInputElement>(null);
	const axios = useFetchFunc();
	const uploadImage = async () => {
		localStorage.removeItem(`imageUrl`);
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
						localStorage.setItem(`imageUrl`, response.imageUrl);
					}
				})
				.catch((error) => {
					console.error(error);
					setLoading(false);
					localStorage.removeItem(`imageUrl`);
				});
		}
	};
	return (
		<div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#F3F3F3ED] p-8">
			<div className="w-[600px] h-[1000px] flex items-center justify-center overflow-hidden relative">
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
				className="w-[20em] h-14 mt-6 rounded-full bg-[#152540] text-white cursor-pointer flex items-center justify-center text-[1.5em] transition hover:bg-[#1c374d] pb-[4px]"
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
