"use client";

import {Suspense} from "react";
import VerifyComponent from "@/components/verify";

const Verify = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<VerifyComponent />
		</Suspense>
	);
};

export default Verify;
