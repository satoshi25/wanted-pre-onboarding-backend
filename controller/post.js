import * as postRepository from '../data/posts.js';

export function getPosts(req, res) {
	const search = req.query.search;
	const data = search
		? postRepository.getAllBySearch(search)
		: postRepository.getAll();
	res.status(200).json(data);
}

export function getPost(req, res) {
	const post_id = req.params.id;
	const post = postRepository.getById(post_id);
	if (post) {
		res.status(200).json(post);
	} else {
		res.status(404).json({ "message": `Post id:${post_id} Not Found` });
	}
}

export function createPost(req, res) {
	const { company_id, position, reward, content, stack } = req.body;
	const post = postRepository.create(company_id, position, reward, content, stack);
	res.status(201).json(post);
}

export function updatePost(req, res) {
	const body = req.body;
	const post_id = req.params.id;
	const post = postRepository.update(post_id, body);
	if (post) {
		res.status(200).json(post);
	} else {
		res.status(404).json({ "message": `Post id:${post_id} Not Found` });
	}
}

export function removePost(req, res) {
	const post_id = req.params.id;
	postRepository.remove(post_id);
	res.sendStatus(204);
}