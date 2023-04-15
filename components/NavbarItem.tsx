import { FC } from "react";

type NavbarItemProps = {
  label: string;
};

export const NavbarItem: FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="cursor-pointer text-white transition hover:text-gray-300">
      {label}
    </div>
  );
};
