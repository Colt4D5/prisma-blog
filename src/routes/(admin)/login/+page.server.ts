import { fail, type Actions } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const actions = {
  loginUser: async ({ request }) => {
    const { email, password } = Object.fromEntries(await request.formData()) as {
			email: string;
			password: string;
		};

    if (!email || !password) {
      return fail(400, {
        missing: true
      });
    }
    
    console.log(email, password);

    return { success: true }
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