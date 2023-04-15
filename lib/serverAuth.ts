import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismadb from "@/lib/prismadb";

// ====================
// サーバー認証処理
// ====================
const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  // セッション中にメール情報が存在しない場合
  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  // メールアドレスを条件にDBからユーザー取得
  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  // ユーザーが存在しない場合
  if (!currentUser) {
    throw new Error("Not signed in");
  }

  return { currentUser };
};

export default serverAuth;
