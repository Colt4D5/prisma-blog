import type { PrismaClient } from "@prisma/client"

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				id: string
				email: string
				username: string
				password: string
			}
		}
		// interface PageData {}
		// interface Platform {}
	}
	const prisma: PrismaClient
}

export { global }
