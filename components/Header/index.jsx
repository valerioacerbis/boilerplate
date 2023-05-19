import Link from "next/link";
import Logo from "../Logo";
import Image from "next/image";

export default function Header() {
	return (
		<div className="bg-black bg-opacity-40 mt-6 rounded-lg shadow-md container mx-auto flex lg:flex-row flex-col py-3 items-center space-y-3 lg:space-y-0 lg:px-4 lg:justify-between">
			<div className="flex lg:flex-row flex-col items-center lg:gap-x-6 space-y-3 lg:space-y-0">
				<Logo />
				<div className="flex gap-x-3 text-white lg:border-l lg:pl-6">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
				</div>

				<div className="flex gap-x-3 text-white text-opacity-50 lg:border-l lg:pl-6 text-xs">
					<Link href="/staticprops">StaticProps</Link>
					<Link href="/server">getServerSideProps</Link>
					<Link href="/client">Client</Link>
				</div>
			</div>

			<div className="flex items-center space-x-3">
				<div className="rounded-md flex">
					<Image src="/logo.svg" width={18} height={18} alt="Logo" />
				</div>
				<p className="text-sm">® Next JS - Evoluzione Boilerplate</p>
			</div>
		</div>
	);
}
