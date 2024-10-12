import { AstrologyIcon } from '@/public/icons/astrology'
import Link from 'next/link'

interface Props {
	title: string
	number: number
}

const Category = ({ title, number }: Props) => {
	return (
		<Link
			href='#'
			className='inline-flex flex-col gap-[10px] px-[90px] py-6 shadow-xl rounded-xl border-[1px] border-slate-200 hover:shadow-none transition'
		>
			<div className='iconbox bg-blue-100 p-[30px] rounded-full'>
				<AstrologyIcon className='h-[32px] w-[32px]' />
			</div>
			<h3 className='text-slate-900 text-[20px]'>{title}</h3>
			<p className='text-slate-700 text-[16px]'>{number} Courses</p>
		</Link>
	)
}

export default Category
