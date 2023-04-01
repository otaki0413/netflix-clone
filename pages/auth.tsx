import { ChangeEvent, useCallback, useState } from "react";
import Input from "@/components/input";

// 認証ページ
const Auth = () => {
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

  console.log(variant);

  return (
    <div className="relative h-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-no-repeat">
      <div className="h-full w-full bg-black lg:bg-black/50">
        <nav className="px-12 py-5">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-12"
          />
        </nav>
        <div className="flex justify-center">
          <div className="w-full self-center rounded-md bg-black/70 p-16 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col">
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
            <button className="mt-5 w-full rounded-md bg-red-600 py-3 text-white">
              {variant === "login" ? "Login" : "Sign up"}
            </button>
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
