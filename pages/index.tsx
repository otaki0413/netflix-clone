import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { Navbar } from "@/components/Navbar";
import { Billboard } from "@/components/Billboard";

// ====================
// サーバー側で実行させたい関数
// ====================
export async function getServerSideProps(context: NextPageContext) {
  // セッション情報取得
  const session = await getSession(context);

  // セッションがない場合
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
      <Billboard />
      </div>
    </>
  );
}     
