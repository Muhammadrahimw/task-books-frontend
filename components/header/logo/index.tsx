"use client";

import Image from "next/image";
import {useRouter} from "next/navigation";

export const LogoItem = () => {
	const router = useRouter();
	return (
		<Image
			onClick={() => router.push(`/books`)}
			src={"/imgs/logo.png"}
			alt="logo"
			width={500}
			height={500}
			className="w-[6em] cursor-pointer"
		/>
	);
};
