// import { PrismaClient } from "@prisma/client";

// // import { PrismaClient } from "../../node_modules/@prisma/client/extension";


// const prismaClientSingleton = () => {
//   return new PrismaClient();
// }

// declare global {
//   var prisma: undefined | ReturnType<typeof prismaClientSingleton>
// }

// const db = globalThis.prisma ?? prismaClientSingleton()

// export default db

// if (process.env.NODE_ENV !== "production") globalThis.prisma = db

// _ _ _

// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const prisma =
//   globalForPrisma.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }

// _ _ _

// // lib/db.ts
// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma?: PrismaClient;
// };

// const db = globalForPrisma.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = db;
// }

// export default db;

// _ _ _

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// _ _ _

// // src/lib/db.ts
// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const db =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: ["error", "warn"], // Optional: can also include "query", "info"
//   });

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

// export default db;

// _ _ _

import { PrismaClient } from "@prisma/client";


const prismaClientSingleton = () => {
  return new PrismaClient();
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const db = globalThis.prismaGlobal ?? prismaClientSingleton()

export default db

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = db