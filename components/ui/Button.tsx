import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const base =
    "rounded-full px-6 py-3 font-medium transition hover:opacity-90";

  const styles = {
    primary: "bg-accent text-white",
    secondary: "bg-muted text-foreground",
    outline: "border border-border text-foreground bg-transparent",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}