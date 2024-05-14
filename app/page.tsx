import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Link href={'/1234'}>Id 1234</Link>
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
		</main>
	);
}
