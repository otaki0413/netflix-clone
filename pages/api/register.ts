import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { email, name, password } = req.body;

    // DB上の既存ユーザとメールアドレスで照合
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    // 既存ユーザーが存在していた場合、エラー処理
    if (existingUser) {
      return res.status(422).json({ error: "Email taken" });
    }

    // パスワードのハッシュ化
    const hashedPassword = await bcrypt.hash(password, 12);

    // 新規ユーザを作成
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    // 登録ユーザ情報を返却
    return res.status(200).json(user);

  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
