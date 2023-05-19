import Link from "next/link";
import Image from "next/image";

export default function Logo() {
	return (
		<div className="bg-white p-3 rounded-md">
			<Link href="/">
				<Image src="/next.svg" width={100} height={20} alt="Logo" />
			</Link>
		</div>
	);
}
