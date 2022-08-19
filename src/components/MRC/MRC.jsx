import React from 'react';

// https://docs.astro.build/en/core-concepts/routing/

const ArticleCard = ({ articleData }) => {
	return (
		<div
			style={{
				padding: '10px',
				margin: '20px',
				boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
				borderRadius: '5px',
			}}
		>
			<h3>{articleData.title}</h3>
			<p>{articleData.description}</p>
			<a href={`/${articleData.id}`}>read here</a>
		</div>
	);
};

const MRC = ({ posts = [] }) => {
	console.log(posts);

	return (
		<div>
			{posts.map((post, index) => (
				<ArticleCard key={index} articleData={post} />
			))}
		</div>
	);
};

export default MRC;
