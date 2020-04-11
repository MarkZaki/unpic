import React, { useState, useEffect } from 'react';
import { Card } from './components/card';
import { Search } from './components/Search';
export const App = () => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useState('');
	useEffect(() => {
		const URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`;
		fetch(URL)
			.then(res => res.json())
			.then(data => {
				setImages(data.hits);
				setIsLoading(false);
			})
			.catch(err => console.log(err));
	}, [term]);

	return (
		<div className="container mx-auto">
			<Search searchText={text => setTerm(text)} />
			{!isLoading && images.length === 0 && (
				<h1 className="text-6xl text-center mx-auto mt-32">No images found</h1>
			)}
			{isLoading ? (
				<h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
			) : (
				<div
					className="grid md:grid-cols-3 md:gap-4 sm:grid-cols-2 sm:gap-3 grid-cols-1 gap-2"
					style={{ justifyItems: 'center' }}
				>
					{images.map(image => (
						<Card key={image.id} image={image} />
					))}
				</div>
			)}
		</div>
	);
};
