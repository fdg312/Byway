import Category from '@/components/shared/Category'
import Instructor from '@/components/shared/Instructor'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex flex-col gap-[60px]'>
			<div className='intro'>
				<Container>
					<div className='wrapper-intro flex justify-between items-center'>
						<div className='max-w-[600px]'>
							<h2 className='text-slate-900 text-[40px] font-bold mb-4 leading-[150%]'>
								Unlock Your Potential with Byway
							</h2>
							<p className='text-slate-700 text-[16px] leading-normal mb-6'>
								Welcome to Byway, where learning knows no bounds. We believe
								that education is the key to personal and professional growth,
								and we're here to guide you on your journey to success.
							</p>
							<Button
								className='px-6 py-3 bg-blue-500 text-[14px] font-medium hover:bg-blue-600'
								variant='default'
								asChild
							>
								<Link href='#'>Start your instructor journey</Link>
							</Button>
						</div>
						<Image
							width={500}
							height={500}
							src='/bg/bg-intro.jpg'
							alt='Intro image'
						/>
					</div>
				</Container>
			</div>
			<div className='data bg-slate-50 py-10'>
				<Container>
					<div className='data-wrapper flex justify-between'>
						<div className='flex flex-col items-center'>
							<span className='text-slate-900 text-[32px] font-semibold'>
								250+
							</span>
							<span className='text-slate-900 text-[14px]'>
								Courses by our best mentors
							</span>
						</div>
						<div className='h-[55px] w-[4px] bg-slate-200'></div>
						<div className='flex flex-col items-center'>
							<span className='text-slate-900 text-[32px] font-semibold'>
								1000+
							</span>
							<span className='text-slate-900 text-[14px]'>
								Courses by our best mentors
							</span>
						</div>
						<div className='h-[55px] w-[4px] bg-slate-200'></div>
						<div className='flex flex-col items-center'>
							<span className='text-slate-900 text-[32px] font-semibold'>
								15+
							</span>
							<span className='text-slate-900 text-[14px]'>
								Courses by our best mentors
							</span>
						</div>
						<div className='h-[55px] w-[4px] bg-slate-200'></div>
						<div className='flex flex-col items-center'>
							<span className='text-slate-900 text-[32px] font-semibold'>
								2400+
							</span>
							<span className='text-slate-900 text-[14px]'>
								Courses by our best mentors
							</span>
						</div>
					</div>
				</Container>
			</div>
			<div className='categories'>
				<Container>
					<div className='categories-wrapper'>
						<div className='upper mb-6'>
							<h3 className='text-slate-900 text-[24px] font-semibold'>
								Top categories
							</h3>
						</div>
						<div className='lower flex justify-between'>
							<Category title='Astrology' number={11} />
							<Category title='Astrology' number={11} />
							<Category title='Astrology' number={11} />
							<Category title='Astrology' number={11} />
						</div>
					</div>
				</Container>
			</div>
			<div className='instructors'>
				<Container>
					<div className='instructors-wrapper'>
						<div className='upper mb-6'>
							<h3 className='text-slate-900 text-[24px] font-semibold'>
								Top Instructors
							</h3>
						</div>
						<div className='lower flex justify-between'>
							<Instructor name='John Doe' raiting={4.5} nstudents={100} />
							<Instructor name='John Doe' raiting={4.5} nstudents={100} />
							<Instructor name='John Doe' raiting={4.5} nstudents={100} />
							<Instructor name='John Doe' raiting={4.5} nstudents={100} />
							<Instructor name='John Doe' raiting={4.5} nstudents={100} />
						</div>
					</div>
				</Container>
			</div>
			<div className='first-infoblock'>
				<Container>
					<div className='wrapper-first-infoblock'></div>
				</Container>
			</div>
		</main>
	)
}
