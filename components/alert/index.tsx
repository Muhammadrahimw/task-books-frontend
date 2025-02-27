import {useEffect} from "react";
import {Toaster, toast} from "sonner";
import {AlertCircle} from "lucide-react";

export const AlertComponent = ({
	variant,
	message,
}: {
	variant: "default" | "destructive";
	message: string;
}) => {
	useEffect(() => {
		if (message) {
			toast[variant === "destructive" ? "error" : "info"](
				<div className="flex items-center gap-2">
					<AlertCircle className="h-4 w-4" />
					{message}
				</div>
			);
		}
	}, [message, variant]);

	return <Toaster richColors position="top-right" />;
};
