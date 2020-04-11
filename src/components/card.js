import React from 'react';

export const Card = ({ image }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<a
				href={image.largeImageURL}
				download
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={image.webformatURL} alt={image.user} className="w-full" />
			</a>
			<div className="px-6 py-4">
				<div className="font-bold text-purple-500 text-xl mb-2">
					Photo by {image.user}
				</div>
				<ul>
					<li>
						<strong>Views: </strong>
						{image.views}
					</li>
					<li>
						<strong>Downloads: </strong>
						{image.downloads}
					</li>
					<li>
						<strong>Likes: </strong>
						{image.likes}
					</li>
				</ul>
			</div>
			<div className="px-6 py-4">
				{image.tags.split(',').map((tag, index) => (
					<span
						key={index}
						className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
					>
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
};
