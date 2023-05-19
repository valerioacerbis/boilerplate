import { use } from "react";
import Link from "next/link";

// getStaticProps in Next13
async function getCharacters() {
	return await (await fetch("http://localhost:3000/api/projects")).json();
}

export default function ProjectsList() {
	const allProjects = use(getCharacters());

	console.log(allProjects);
	console.log("debug");

	return (
		<div className="my-6">
			<h2 className="text-lg mb-6">
				ProjectsList component: getStaticProps in Next13 - Payload CMS
			</h2>
			<div className="border border-dashed rounded-md p-6">
				<ul>
					{allProjects?.docs.map((c) => (
						<li key={c.id}>
							<Link
								href={`/projects/${c.title}`
									.replace(/\s+/g, "-")
									.toLowerCase()}
							>
								<h2>{c.title}</h2>
								<p>{c.description}</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
