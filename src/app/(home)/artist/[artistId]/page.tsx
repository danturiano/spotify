import React from 'react';

export default async function ArtistPage({
	params,
}: {
	params: Promise<{ artistId: string }>;
}) {
	const artistId = (await params).artistId;
	return <div>page</div>;
}
