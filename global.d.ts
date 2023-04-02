import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    /**
     * PrismaClientのインスタンスをグローバルスコープでアクセス可能にする。
     * これによりPrismaClientをインポートせずに、アプリケーションのどこか
     * らでも、prismadb変数を介してPrismaClientにアクセスできます。
     */
    var prismadb: PrismaClient;
  }
}
