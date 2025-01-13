import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
	const date = new Date(dateString);

	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	}).format(date);
}

export function msToMinutesAndSeconds(ms: number): string {
	const minutes = Math.floor(ms / 60000); // Convert milliseconds to minutes
	const seconds = Math.floor((ms % 60000) / 1000); // Get the remainder in milliseconds and convert to seconds
	return `${minutes}:${seconds.toString().padStart(2, '0')}`; // Format as "minutes:seconds"
}
