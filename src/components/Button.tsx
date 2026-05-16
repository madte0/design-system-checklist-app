import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type?: 'button' | 'submit';
};

export function Button({ children, type = 'button' }: Props) {
  return <button className="button" type={type}>{children}</button>;
}
