import { StarIcon } from '@/public/icons/star'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	name: string
	raiting: number
	nstudents: number
}

const Instructor = ({ name, raiting, nstudents }: Props) => {
	return (
		<Link
			href='#'
			className='p-4 flex flex-col gap-4 shadow-xl rounded-xl border-[1px] border-slate-200 hover:shadow-none transition'
		>
			<Image
				src='/example-instructor.jpg'
				alt='Instructor'
				width={180}
				height={130}
			/>
			<div className='textblock flex flex-col items-center'>
				<h3 className='text-slate-900 text-[20px]'>{name}</h3>
				<p className='text-slate-700 text-[16px]'>UI/UX Designer</p>
			</div>
			<div className='w-full h-[1px] bg-slate-200'></div>
			<div className='lower flex justify-between'>
				<span className='raiting flex gap-1'>
					<StarIcon />
					{raiting}
				</span>
				<span className='nstudents'>{nstudents} students</span>
			</div>
		</Link>
	)
}

export default Instructor
