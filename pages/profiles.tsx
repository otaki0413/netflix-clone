import { NextPageContext } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { getSession } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

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

const Profiles = () => {
  const router = useRouter();
  const { data: user } = useCurrentUser();
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl text-white md:text-6xl">Who is watching?</h1>
        <div className="mt-10 flex items-center justify-center gap-8">
          <div onClick={() => router.push("/")}>
            <div className="group mx-auto w-44 flex-row">
              <div
                className="
                  bottom-2
                  flex
                  h-44
                  w-44
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border-transparent
                  group-hover:cursor-pointer
                  group-hover:border-white
                "
              >
                <Image
                  src="/images/default-blue.png"
                  width={150}
                  height={150}
                  alt="Profile"
                />
              </div>
              <div
                className="
                  mt-4
                  text-center
                  text-2xl
                  text-gray-400
                  group-hover:text-white
                "
              >
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
