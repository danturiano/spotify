'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React, { useState } from 'react';

export default function SearchButton() {
	// const [search, setSearch] = useState('');
	const [openSearch, setOpenSearch] = useState(false);

	return (
		<div className="p-2 w-full flex">
			<Button
				variant={'ghost'}
				className="hover:bg-accent rounded-full h-9 w-9 [&_svg]:size-5"
				onClick={() => setOpenSearch(!openSearch)}
			>
				<Search />
			</Button>

			<Input
				type="email"
				placeholder="Email"
				className={
					(openSearch ? 'opacity-100' : 'opacity-0') +
					'transition-opacity ease-in-out delay-150 duration-300'
				}
			/>
		</div>
	);
}
