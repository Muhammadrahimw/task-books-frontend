import Image from "next/image";
import {ModeToggle} from "../modeToggle";
import {NavLinksItem} from "./links";

export const NavbarComponent = () => {
	return (
		<nav className="py-4 border-b mb-4">
			<div className="flex justify-between items-center gap-4 w-[95%] mx-auto">
				<Image
					src={"/imgs/logo.png"}
					alt="logo"
					width={500}
					height={500}
					className="w-[6em]"
				/>
				<div className="flex items-center gap-8">
					<NavLinksItem />
					<div className="ml-[15em]">
						<ModeToggle />
					</div>
				</div>
			</div>
		</nav>
	);
};
