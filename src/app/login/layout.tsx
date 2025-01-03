import React from 'react';

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-screen bg-gradient-to-t from-primary from-50% to-accent flex items-center justify-center">
			<div>{children}</div>
			<div className="absolute bottom-0 w-full h-20 bg-secondary-foreground">
				<div className="flex justify-center items-center h-full">
					<p className="text-xs text-muted-foreground">
						This site is protected by reCAPTCHA and the Google Privacy Policy
						and Terms of Service apply.
					</p>
				</div>
			</div>
		</div>
	);
}
