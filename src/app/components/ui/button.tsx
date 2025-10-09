// export function Button() {
//   return <button>Click me</button>;
// }

// Test button

import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}