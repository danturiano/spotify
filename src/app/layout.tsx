import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Spotify - Web Player: Music for everyone',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased overflow-hidden`}>
				{children}
			</body>
		</html>
	);
}
