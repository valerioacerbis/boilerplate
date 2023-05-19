import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from "../components/Header";


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Header />
				<div className="container mx-auto">
					{children}
				</div>
			</body>
		</html>
	)
}


