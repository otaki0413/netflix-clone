import { ChangeEvent, FC } from "react";

interface InputProps {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type?: string;
}

// ログイン画面で使用するinputコンポーネント
export const Input: FC<InputProps> = (props: InputProps) => {
  const { id, value, onChange, label, type } = props;
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className="
          peer
          block
          w-full
          appearance-none
          rounded-md
          bg-neutral-700
          px-6
          pb-1
          pt-6
          text-base
          text-white
          invalid:border-b
          focus:outline-none
          focus:ring-0
        "
        placeholder=""
      />
      <label
        className="
          absolute
          left-6
          top-4
          z-10
          origin-[0]
          -translate-y-3
          scale-75
          text-base
          text-zinc-400
          duration-150
          peer-placeholder-shown:translate-y-0
          peer-placeholder-shown:scale-100
          peer-focus:-translate-y-3
          peer-focus:scale-75
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
