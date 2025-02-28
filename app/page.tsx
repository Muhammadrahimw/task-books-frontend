"use client";

import {useRouter} from "next/navigation";
import {useEffect} from "react";

const Home = () => {
	const router = useRouter();
	useEffect(() => {
		router.push("/books");
	}, []);
	return <div>Home</div>;
};

export default Home;
