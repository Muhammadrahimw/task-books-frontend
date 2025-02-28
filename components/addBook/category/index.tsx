"use client";

import * as React from "react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function CategorySelectComponent() {
	const categoryFunc = (value: string) => {
		localStorage.setItem("selectedCategory", value);
	};
	return (
		<Select onValueChange={categoryFunc}>
			<SelectTrigger className="w-full h-12">
				<SelectValue placeholder="Select a category" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Categories</SelectLabel>
					<SelectItem value="Temuriylar davri">Temuriylar davri</SelectItem>
					<SelectItem value="Jadid adabiyoti">Jadid adabiyoti</SelectItem>
					<SelectItem value="Sovet davri">Sovet davri</SelectItem>
					<SelectItem value="Mustaqillik davri">Mustaqillik davri</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
