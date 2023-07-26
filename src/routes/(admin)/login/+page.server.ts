import { fail, type Actions, redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const actions = {
  loginUser: async ({ request, cookies, locals }) => {
    const { email, password } = Object.fromEntries(await request.formData()) as {
			email: string;
			password: string;
		};

    if (!email || !password) {
      return fail(400, {
        missing: true
      });
    }
    
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        password: password
      }
    });

    if (!user) {
      return fail(400, {
        invalid: true
      });
    }

    locals.user = user;

    cookies.set('user', email);

    throw redirect(302, '/admin/new-post');

  },
  registerUser: async ({ request }) => {
    const { email, emailconfirm, password } = Object.fromEntries(await request.formData()) as {
			email: string;
      emailconfirm: string;
			password: string;
		};

    if (!email || !emailconfirm || !password) {
      return fail(400, {
        missing: true
      });
    }

    if (email !== emailconfirm) {
      return fail(400, {
        mismatch: true
      });
    }
    
    try {
      await prisma.user.create({
        data: {
          email,
          password
        }
      });
    } catch (err) {
      console.log(err);
      return fail(500, { message: 'Could not register user'})
    }

    return { success: true }
  },
} satisfies Actions;