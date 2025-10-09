// export function Button() {
//   return <button>Click me</button>;
// }

// Test button

// import { ReactNode } from 'react';

// type ButtonProps = {
//   children: ReactNode;
// };

// export function Button({ children }: ButtonProps) {
//   return <button>{children}</button>;
// }

// export function Button({ children }: { children: React.ReactNode }) {
//   return <button>{children}</button>;
// }


// components/ui/Button.tsx
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export function Button({ children, onClick, type = "button", className = "" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ml-5 ${className}`}
    >
      {children}
    </button>
  );
}