import Logo from '@/components/logo';
import React from 'react';
import LoginBtn from './_components/LoginBtn';

export default function login() {
	return (
		<div className="w-[32rem] rounded-lg bg-primary bg-gradient-to-b from-primary from-60% to-secondary-foreground p-6 flex flex-col gap-4">
			<div className="flex flex-col items-center gap-2">
				<Logo />
				<h1 className="font-extrabold tracking-tight text-3xl text-primary-foreground">
					Log in to Spotify
				</h1>
				<p className="text-center">
					Please log in to your Spotify account. This will allow us to access
					your playlists, favorite tracks, and more.
				</p>
			</div>
			<div className="flex items-center justify-center">
				<LoginBtn />
			</div>
		</div>
	);
}
