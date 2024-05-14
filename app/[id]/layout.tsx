'use client';
import { Metadata } from 'next';
import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

export default function Layout(props: any) {
	const searchParams = useSearchParams();
	const sectionParam = searchParams.get('section');
	// return (
	// 	<>
	// 		{props.children}
	// 		{sectionParam === 'about' && props.about}
	// 	</>
	return props.children;
}
