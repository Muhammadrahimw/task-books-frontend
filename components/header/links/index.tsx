"use client";

import {useRouter} from "next/navigation";
import {useState} from "react";
import {Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {DialogTitle} from "@/components/ui/dialog";

export const NavLinksItem = () => {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const navItems = [
		{label: "Bosh sahifa", path: "/books", num: 1},
		{label: "Author qo'shish", path: "/add-author", num: 2},
		{label: "Kitob qo'shish", path: "/add-book", num: 3},
		{label: "Maqolalar", path: "/book", num: 4},
		{label: "Forum", path: "/book", num: 5},
	];

	return (
		<div>
			<div className="hidden lg:flex items-center gap-12 max-xl:gap-6">
				{navItems.map(({label, path, num}) => (
					<p
						key={num}
						onClick={() => router.push(path)}
						className="cursor-pointer">
						{label}
					</p>
				))}
			</div>

			<div className="lg:hidden">
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon">
							{open ? <X /> : <Menu className="scale-150" />}
						</Button>
					</SheetTrigger>
					<SheetContent side="left">
						<DialogTitle className="sr-only">Navigation Menu</DialogTitle>{" "}
						<nav className="flex flex-col gap-4">
							{navItems.map(({label, path, num}) => (
								<p
									key={num}
									onClick={() => {
										router.push(path);
										setOpen(false);
									}}
									className="cursor-pointer text-lg">
									{label}
								</p>
							))}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
};
