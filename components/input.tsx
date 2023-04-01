import { FC } from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: FC<InputProps> = (props: InputProps) => {
  const { id, value, onChange, label, type } = props;
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className="form-input block w-full rounded-md bg-slate-500 p-5 px-6"
        placeholder=""
      />

      <label
        className="text-white"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
