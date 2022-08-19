import React from 'react';

const Article = ({ pageData: pd }) => {
	console.log('hey', pd);
	if (pd.error) {
		pd = { title: 'page not found', body_html: '<h1>NAI' };
	}
	return (
		<>
			<div>{pd.title}</div>
			<div
				dangerouslySetInnerHTML={{
					__html: pd.body_html
				}}
			/>
		</>
	);
};

export default Article;
