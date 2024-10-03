import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-inter',
})

// const poppins = Poppins({
// 	subsets: ['latin'],
// 	weight: ['400', '500', '600'],
// 	variable: '--font-poppins',
// })

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
			<body className={`${inter.className}`}>
				<Navbar />
				{children}
				<Footer />
				<SpeedInsights />
			</body>
		</html>
	)
}
