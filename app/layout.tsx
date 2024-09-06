import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

export const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-inter',
})

export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: 'Byway',
	description: 'Course marketplace',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={``}>{children}</body>
		</html>
	)
}
