import { PrismaClient } from '@prisma/client';

declare global {
	var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	if (!global.cachedPrisma) {
		global.cachedPrisma = new PrismaClient();
	}

	prisma = global.cachedPrisma;
}

export const db = prisma;
// const prisma = new PrismaClient();

// (async () => {
// 	try {
// 		console.log(await prisma.widget.create({ data: {} }));
// 	} catch (err) {
// 		console.error('error executing query:', err);
// 	} finally {
// 		prisma.$disconnect();
// 	}
// })();
