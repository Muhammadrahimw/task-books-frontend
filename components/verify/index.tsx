"use client";

import {useFetchFunc} from "@/hooks/useAxios";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";
import {motion} from "framer-motion";

const VerifyComponent = () => {
	const axios = useFetchFunc();
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	useEffect(() => {
		axios({
			url: `/auth/verify`,
			method: "GET",
			params: token ? {token} : undefined,
		})
			.then((res) => {
				if (res.status === 201) {
					router.push(`/books`);
				}
			})
			.catch((err) => console.log(err));
	}, [router, token, axios]);

	return (
		<section className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
			<motion.h1
				className="text-[4em] font-semibold"
				initial={{opacity: 0, y: -10}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}>
				We are verifying you
			</motion.h1>
		</section>
	);
};

export default VerifyComponent;
