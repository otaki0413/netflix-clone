import { PrismaClient } from "@prisma/client";

// グローバル変数prismadbが既に設定されている場合はその値を使用し、設定されていない場合は新しいPrismaClientのインスタンスを作成する
const client = global.prismadb || new PrismaClient();

/**
 * Node.jsの環境変数NODE_ENVが"production"の場合に、prismadbグローバル変数にclientを設定する。
 * これは、開発環境ではグローバル変数を使わずに、テスト環境や本番環境ではグローバル変数を使うようにするための設定である。
 **/
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
