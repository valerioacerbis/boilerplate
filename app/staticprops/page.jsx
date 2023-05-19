import Link from "next/link";
import { use } from "react";

// getStaticProps in Next13
async function getCharacters() {
	return await (
		await fetch("https://rickandmortyapi.com/api/character")
	).json();
}

// La doc Next 13 consiglia questa: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching

// async function getCharacters() {
// 	const res = await fetch("https://rickandmortyapi.com/api/character");
// 	return res.json();
// }

export default function BlogList() {
	const allCharacters = use(getCharacters());

	return (
		<main className="page">
			<h1 className="page__title">getStaticPaths and getStaticProps</h1>

			{allCharacters?.results.map((c) => (
				<ul key={c.id}>
					<Link
						href={`/staticprops/${c.name}`
							.replace(/\s+/g, "-")
							.toLowerCase()}
					>
						<li>{c.name}</li>
					</Link>
				</ul>
			))}
		</main>
	);
}
