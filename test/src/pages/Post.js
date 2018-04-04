import React from 'react';

const Post = ({location,match})=>{
	return (
		<div>
			<h3>post {match.params.id}</h3>
			<ul>
				<li>location.pathname: {location.pathname}</li>
				<li>match.path: {match.path}</li>
				<li>match.url: {match.url}</li>
			</ul>
		</div>
	);
};

export default Post;