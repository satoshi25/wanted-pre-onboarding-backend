import { db } from '../db/database.js';

export function getAll() {
	return posts
}

export function getAllBySearch(search) {
	return posts.filter(post => {
		for (let key in post) {
			if (post[key].includes(search)) {
				return post;
			}
		}
	});
}

export function getById(post_id) {
	return posts.find(post => post.post_id === post_id);
}

export function create(company_id, position, reward, content, stack) {
	const post = {
		post_id: Date.now().toString(),
		company_id,
		position,
		reward,
		content,
		stack
	}
	posts = [...posts, post];
	return post;
}

export function update(post_id, body) {
	let post = posts.find(post => post.post_id === post_id);
	let keys = ['position', 'reward', 'content', 'stack'];
	if (post) {
		keys.forEach(key => {
			if (body[key]) {
				post[key] = body[key];
			}
		});
	}
	return post;
}

export function remove(post_id) {
	posts = posts.filter(post => post.post_id !== post_id);
}