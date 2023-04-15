/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { NavbarItem } from "./NavbarItem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import { AccountMenu } from "./AccountMenu";

const TOP_OFFSET = 66;

// ナビゲーションバー用のコンポーネント
export const Navbar = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [isShowAccountMenu, setIsShowAccountMenu] = useState(false);
  const [isShowBackGround, setIsShowBackGround] = useState(false);

  // マウント・アンマウント処理
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setIsShowBackGround(true);
      } else {
        setIsShowBackGround(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // mobile版メニューの開閉処理
  const toggleMobileMenu = useCallback(() => {
    setIsShowMobileMenu((current) => !current);
  }, []);

  // アカウントメニューの開閉処理
  const toggleAccountMenu = useCallback(() => {
    setIsShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="fixed z-40  w-full">
      <div
        className={`
          flex
          flex-row
          items-center
          bg-zinc-900/90
          px-4
          py-6
          transition
          duration-500
          md:px-16
          ${isShowBackGround ? "bg-zinc-900/90" : ""}
        `}
      >
        <img
          className="h-4 lg:h-7"
          src="/images/logo.png"
          alt="Logo"
        />
        {/* 1024px以上： ナビゲーションメニュー */}
        <div
          className="
          ml-8
          hidden
          flex-row
          gap-7
          lg:flex
        "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My list" />
          <NavbarItem label="Browse by language" />
        </div>

        {/* 1024px未満： ナビゲーションメニュー */}
        <div
          onClick={toggleMobileMenu}
          className="relative ml-8 flex cursor-pointer flex-row items-center gap-2 lg:hidden"
        >
          <p className="text-sm text-white hover:text-gray-300">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              isShowMobileMenu ? "rotate-180" : "rotate-0"
            } `}
          />
          <MobileMenu visible={isShowMobileMenu} />
        </div>
        {/* 検索ボタン・通知ボタン・アイコン */}
        <div className="ml-auto flex flex-row items-center gap-7">
          <div className="cursor-pointer text-gray-200 hover:text-gray-300">
            <BsSearch />
          </div>
          <div className="cursor-pointer text-gray-200 hover:text-gray-300">
            <BsBell />
          </div>

          <div
            onClick={toggleAccountMenu}
            className="relative flex cursor-pointer flex-row items-center gap-2"
          >
            <div className="h-6 w-6 overflow-hidden rounded-md lg:h-10 lg:w-10">
              <img
                src="/images/default-blue.png"
                alt=""
              />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                isShowAccountMenu ? "rotate-180" : "rotate-0"
              } `}
            />
            <AccountMenu visible={isShowAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};
