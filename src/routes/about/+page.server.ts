// import type { PageServerLoad } from "./$types";
// import { prisma } from "$lib/server/prisma";

// export const load: PageServerLoad = (async () => {
//   const posts = await prisma.post.findMany({
//     take: 10,
//     skip: 0,
//   })

//   if (!posts) throw new Error('No posts found')

//   console.log(posts)

//   return {
//     posts,
//   }
// }) satisfies PageServerLoad;