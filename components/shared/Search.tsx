'use client'

import { SearchIcon } from '@/public/icons/search'
import { useState } from 'react'
import { Input } from '../ui/input'

const Search = () => {
	const [value, setValue] = useState('')

	return (
		<div className='search relative flex items-center'>
			<SearchIcon className='absolute h-4 w-4 left-3' />
			<Input
				className='min-w-[600px] h-10 p-3 pl-9 border-slate-700'
				type='text'
				placeholder='Search courses'
				onChange={e => setValue(e.target.value)}
				value={value}
			/>
		</div>
	)
}

export default Search
