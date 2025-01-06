import { auth } from '@/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default async function UserProfile() {
	const session = await auth();
	if (!session) {
		return null;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="hover:scale-105 bg-gray-700 rounded-full p-1.5">
				<Avatar className="h-8 w-8">
					<AvatarImage src={session.user?.image} />
					<AvatarFallback className="bg-spotify text-primary font-semibold text-sm">
						{session.user?.name?.charAt(0).toUpperCase()}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				sideOffset={12}
				className="ml-2 min-w-[12rem] bg-accent border-none text-primary-foreground font-normal"
			>
				<DropdownMenuItem>Account</DropdownMenuItem>
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Log out</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
