import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const { id } = params;

  const result = await prisma.post.findUnique({
    where: { id: Number(id) }
  })

  if (!result) {
    return {
      status: 404
    }
  }

  return {
    status: 200,
    post: result
  }
}) satisfies PageServerLoad;
