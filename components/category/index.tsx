"use client";

import {useRouter, useSearchParams} from "next/navigation";

export const CategoryComponent = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchQuery = searchParams.get(`search`) || "";
	return (
		<>
			<h2 className="text-[2em] max-[450px]:text-[1.5em]">
				Asosiy kategoriyalar
			</h2>
			<div className="flex items-center justify-center gap-16 mt-5 text-xl font-medium max-md:gap-6 max-sm:text-2xl max-sm:grid max-sm:grid-cols-2 max-[450px]:text-xl">
				<p
					onClick={() =>
						router.push(
							`/books?search=${searchQuery}&category=Temuriylar davri`
						)
					}
					className="font-light cursor-pointer">
					Temuriylar davri
				</p>
				<p
					onClick={() =>
						router.push(`/books?search=${searchQuery}&category=Jadid adabiyoti`)
					}
					className="font-light cursor-pointer">
					Jadid adabiyoti{" "}
				</p>
				<p
					onClick={() =>
						router.push(`/books?search=${searchQuery}&category=Sovet davri`)
					}
					className="font-light cursor-pointer">
					Sovet davri{" "}
				</p>
				<p
					onClick={() =>
						router.push(
							`/books?search=${searchQuery}&category=Mustaqillik davri`
						)
					}
					className="font-light cursor-pointer">
					Mustaqillik davri
				</p>
			</div>
		</>
	);
};
