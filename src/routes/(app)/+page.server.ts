// import { fail, type Actions } from '@sveltejs/kit';
// import { prisma } from '$lib/server/prisma';

// export const actions: Actions = {
// 	createNewPost: async ({ request }) => {
// 		const { title, body } = Object.fromEntries(await request.formData()) as {
// 			title: string;
// 			body: string;
// 		};

//     try {
//       await prisma.post.create({
//         data: {
//           title,
//           body,
//           featured_image: 'stuff',
//           likes: 0
//         }
//       });
//     } catch (err) {
//       console.log(err);
//       return fail(500, { message: 'Could not create post'})
//     }

// 		return {
// 			status: 201
// 		};
// 	}
// };
