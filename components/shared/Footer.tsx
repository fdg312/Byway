import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../ui/Container'

const Footer = () => {
	return (
		<footer className='footer bg-slate-800 py-[80px]'>
			<Container>
				<div className='wrapper flex justify-between'>
					<div className='max-w-[415px]'>
						<Link className='flex items-center gap-1 mb-4' href='#'>
							<Image src='/logo.svg' alt='Byway logo' width={30} height={40} />
							<h1 className='text-white'>ByWay</h1>
						</Link>
						<p className='desc text-[14px] text-slate-300 leading-6'>
							Empowering learners through accessible and engaging online
							education.
							<br />
							Byway is a leading online learning platform dedicated to providing
							high-quality, flexible, and affordable educational experiences.
						</p>
					</div>
					<div>
						<h3 className='text-white mb-2 font-semibold'>Get help</h3>
						<ul className='text-slate-300 flex flex-col gap-2 font-medium'>
							<li>
								<Link href='#contact-us' className='hover:text-white'>
									Contact Us
								</Link>
							</li>
							<li>
								<Link href='#latest-articles' className='hover:text-white'>
									Latest Articles
								</Link>
							</li>
							<li>
								<Link href='#faq' className='hover:text-white'>
									FAQ
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-white mb-2 font-semibold'>Programs</h3>
						<ul className='text-slate-300 flex flex-col gap-2 font-medium'>
							<li>
								<Link href='#art-design' className='hover:text-white'>
									Art & Design
								</Link>
							</li>
							<li>
								<Link href='#business' className='hover:text-white'>
									Business
								</Link>
							</li>
							<li>
								<Link href='#it-software' className='hover:text-white'>
									IT & Software
								</Link>
							</li>
							<li>
								<Link href='#languages' className='hover:text-white'>
									Languages
								</Link>
							</li>
							<li>
								<Link href='#programming' className='hover:text-white'>
									Programming
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-white mb-2 font-semibold'>Contact us</h3>
						<ul className='text-slate-300 flex flex-col gap-2 font-medium'>
							<li>Address: 123 Main Street, Anytown, CA 12345</li>
							<li>
								Tel: <a href='tel:+1234567890'>+(123) 456-7890</a>
							</li>
							<li>Mail: bywayedu@webkul.in</li>
						</ul>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
