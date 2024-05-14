import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Preview in ID',
};

export default function Home({ params }: any) {
	return (
		<>
			<div> Preview {params.id}</div>
			<Link href={'/'}>Home</Link>
		</>
	);
}
