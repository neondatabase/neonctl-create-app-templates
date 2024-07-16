import { PrismaClient } from "@prisma/client/edge";

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://neondb_owner:RcaPxTE12nJY@ep-patient-hill-a592yvhb-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
    },
  },
});

// export const prisma = new PrismaClient();
