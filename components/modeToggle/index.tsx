"use client";

import * as React from "react";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import {getCookie, deleteCookie} from "cookies-next";
import {useRouter} from "next/navigation";

import {Button} from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {useFetchFunc} from "@/hooks/useAxios";

export function ModeToggle() {
	const router = useRouter();
	const {setTheme} = useTheme();
	const axios = useFetchFunc();
	const [token, setToken] = React.useState<string | null>(null);

	// Cookie ni doimiy tekshirish
	React.useEffect(() => {
		const checkToken = () => {
			const userToken = getCookie("token") as string | null;
			setToken(userToken);
		};

		// Har 2 soniyada tokenni tekshirib turish
		const interval = setInterval(checkToken, 2000);
		return () => clearInterval(interval); // Komponent unmount bo‘lsa to‘xtatish
	}, []);

	// Logout funksiyasi
	const handleLogout = async () => {
		try {
			await axios({url: "/auth/logout", method: "POST"}); // Logout so‘rov yuborish
			deleteCookie("token"); // Cookie o‘chirish
			setToken(null); // State ni yangilash
			router.push("/sign-in"); // Login sahifasiga yo‘naltirish
		} catch (error) {
			console.error("Logout xatosi:", error);
		}
	};

	return (
		<div className="flex items-center gap-5">
			<div
				onClick={token ? handleLogout : () => router.push("/sign-in")}
				className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 cursor-pointer">
				<p>{token ? "Log Out" : "Sign In"}</p>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" size="icon">
						<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onClick={() => setTheme("light")}>
						Light
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme("dark")}>
						Dark
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme("system")}>
						System
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
