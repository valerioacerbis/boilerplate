import { use } from "react";

//getServerSideProps in Next13
async function getCharacters() {
	return await (
		await fetch("https://rickandmortyapi.com/api/character", {
			// cache: "no-store",
		})
	).json();
}

export default function ServerPage() {
	const characters = use(getCharacters());
	return (
		<main className="page">
			<h1 className="page__title">
				Server Fetching (getServerSideProps)
			</h1>
			{characters?.results?.map((c) => {
				return (
					<ul key={c.id}>
						<li>{c.name}</li>
					</ul>
				);
			})}
		</main>
	);
}
