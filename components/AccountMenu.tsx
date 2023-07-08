/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

type AccountMenuProps = {
  visible?: boolean;
};

// アカウントメニュー用のコンポーネント
export const AccountMenu: FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="absolute right-0 top-14 w-56 flex-col border-2 border-gray-800 bg-black py-5">
      <div className="flex flex-col gap-3">
        <div className="group/item flex w-full flex-row items-center gap-3 px-3">
          <img
            className="w-8 rounded-md"
            src="/images/default-blue.png"
            alt="Logo"
          />
          <p className="text-sm text-white group-hover/item:underline">
            UserName
          </p>
        </div>
        <hr className="my-4 h-px border-0 bg-gray-600" />
        <div className="flex items-center justify-center px-1 text-center text-sm text-white hover:underline">
          Sign out
        </div>
      </div>
    </div>
  );
};
