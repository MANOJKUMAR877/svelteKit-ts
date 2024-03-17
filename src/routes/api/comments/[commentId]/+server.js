import { comments } from '$lib/Comments';
import {json} from '@sveltejs/kit'
/**
 * @param {{ params: any; }} requestEvent
 */
export async function GET(requestEvent) {
	const { params } = requestEvent;
	const { commentId } = params;
	const comment = comments.find((comment) => comment.id === parseInt(commentId));
    return json(comment)
}

// @ts-ignore
export async function PATCH(requestEvent) {
	const { params,request } = requestEvent;
	const { commentId } = params;
    const {text}=await request.json()
	const comment = comments.find((comment) => comment.id === parseInt(commentId));
    // @ts-ignore
    comment.text = text
    return json(comment)
}
