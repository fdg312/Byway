import { CartIcon } from '@/public/icons/cart'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Container } from '../ui/Container'
import Search from './Search'

const Navbar = () => {
	return (
		<header>
			<Container>
				<nav className='flex items-center justify-between py-3'>
					<Link className='flex items-center gap-1' href='#'>
						<Image src='/logo.svg' alt='Byway logo' width={30} height={40} />
						<h1>ByWay</h1>
					</Link>
					<div className='flex gap-10 items-center'>
						<Link href='#'>Categories</Link>
						<Search />
						<Link href='#'>Teach on Byway</Link>
					</div>
					<div className='flex items-center gap-3'>
						<Link href='#'>
							<CartIcon className='w-5 h-5' />
						</Link>
						<Button
							className='rounded-none text-slate-700 border-2 border-slate-700 hover:bg-slate-700 hover:text-white'
							variant='outline'
							asChild
						>
							<Link href='#'>Log In</Link>
						</Button>
						<Button
							className='rounded-none bg-slate-700 text-white border-2 border-slate-700 hover:bg-white hover:text-slate-700'
							variant='outline'
							asChild
						>
							<Link href='#'>Sign Up</Link>
						</Button>
					</div>
				</nav>
			</Container>
		</header>
	)
}

export default Navbar
