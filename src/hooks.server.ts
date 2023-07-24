import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  const user = {
    id: "123",
    email: "test@email.com",
    username: "someguy123",
    password: "123123"
  }

  // event.locals.user = user;

  const response = await resolve(event);
  return response;
}) satisfies Handle;