"use client";

import {useFetchFunc} from "@/hooks/useAxios";
import {useEffect} from "react";

export const BooksComponent = () => {
	const axios = useFetchFunc();
	useEffect(() => {
		axios({url: `/get/books`})
			.then(({data}) => console.log(data))
			.catch((error) => console.error(error));
	}, []);
	return <section>BooksComponent</section>;
};
