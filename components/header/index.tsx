import {ModeToggle} from "../modeToggle";
import {NavLinksItem} from "./links";
import {LogoItem} from "./logo";

export const NavbarComponent = () => {
	return (
		<nav className="py-4 border-b">
			<div className="flex justify-between items-center gap-4 w-[95%] mx-auto">
				<LogoItem />
				<div className="flex items-center gap-8 max-lg:gap-2">
					<NavLinksItem />
					<div className="ml-[15em] max-xl:ml-6 max-lg:ml-3">
						<ModeToggle />
					</div>
				</div>
			</div>
		</nav>
	);
};
