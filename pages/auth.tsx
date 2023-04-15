import { ChangeEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Input } from "@/components/input";
import axios from "axios";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

// ログイン画面・新規登録画面用のページ
const Auth = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  // name, email, passwordを更新する処理
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // ログインか登録かを切り替える処理
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  // サインイン時の認証処理
  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  // 新規登録時の認証処理
  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      // ログイン処理を呼び出す
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  // console.log(variant);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-no-repeat">
      <div className="h-full w-full bg-black lg:bg-black/50">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            alt="netflix logo"
            width={200}
            height={200}
            className="h-12"
          />
        </nav>
        <div className="flex justify-center">
          <div className="w-full self-center rounded-md bg-black/70 p-16 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" ? (
                <Input
                  label="UserName"
                  onChange={onChangeName}
                  id="name"
                  type="text"
                  value={name}
                />
              ) : null}
              <Input
                label="Email"
                onChange={onChangeEmail}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={onChangePassword}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="mt-5 w-full rounded-md bg-red-600 py-3 text-white"
            >
              {variant === "login" ? "Login" : "Sign up"}
            </button>
            <div className="mt-8 flex flex-row items-center justify-center gap-4">
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
              >
                <FaGithub size={30} />
              </div>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80">
                <FcGoogle size={30} />
              </div>
            </div>

            <p className="mt-12 text-neutral-500">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account"}
              <span
                onClick={toggleVariant}
                className="ml-3 cursor-pointer text-base text-white hover:underline"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
