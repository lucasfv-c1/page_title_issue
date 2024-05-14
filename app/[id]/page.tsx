import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
export async function generateMetadata(
	{ params, searchParams }: any,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const { section } = searchParams;
	const sectionTitle = section
		? ` Editing/${
				(section as string).charAt(0)?.toUpperCase() + section?.slice(1)
		  }`
		: ' Details';

	return {
		title: {
			absolute: sectionTitle,
		},
	};
}
export default function Home({ params }: any) {
	return (
		<>
			<div> Hello {params.id}</div>
			<Link href={'/'}>Home</Link>
			<br />
			<Link href={'/1234?section=about'}>About</Link>
			<br />
			<Link href={'/1234/preview'}>preview</Link>
		</>
	);
}
