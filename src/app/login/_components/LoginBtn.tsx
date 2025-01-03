import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import logo from '/public/logo_green.svg';

export default function LoginBtn() {
	return (
		<form
			action={async () => {
				'use server';
				await signIn('spotify', { redirectTo: '/' });
			}}
		>
			<Button
				variant={'outline'}
				className="rounded-2xl"
				type="submit"
				size={'lg'}
			>
				<Image src={logo} alt="Spotify Logo" width={24} height={24} />
				Continue with Spotify
			</Button>
		</form>
	);
}
