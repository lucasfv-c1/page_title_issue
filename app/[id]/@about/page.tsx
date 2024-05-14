'use client';

import { Metadata } from 'next';
import Link from 'next/link';

export default function Home({ params }: any) {
	return (
		<>
			<div> About page</div>
			<Link href={'/'}>Home</Link>
		</>
	);
}
