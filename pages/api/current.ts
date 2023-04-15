import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";

// ====================
// サーバー認証を通じてログインユーザー情報を取得してJSON形式でレスポンスするAPIルート
// ====================
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // リクエストがGETかどうか確認
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    // サーバー認証を通じて、ログイン中のユーザー取得
    const { currentUser } = await serverAuth(req);
    console.log(currentUser);
    return res.status(200).json(currentUser);
  } catch (error) {
    // エラー処理
    console.log(error);
    return res.status(400).end();
  }
}
