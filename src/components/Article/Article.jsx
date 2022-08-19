import React from 'react';

const Article = ({ pageData: pd }) => {
	if (pd.error) {
		pd = { title: 'page not found', body_html: '<h1>NAI' };
	}
	return (
		<>
			<h1>{pd.title}</h1>
			<image
				src={pd.cover_image || 'https://via.placeholder.com/350x150'}
				alt="This is a wonderful image"
				height={500}
				width={500}
			/>
			<div
				dangerouslySetInnerHTML={{
					__html: pd.body_html
				}}
			/>
		</>
	);
};

export default Article;
