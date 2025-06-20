import { type ReactNode } from "react";

/**
 * Define Props for the Alert component using ReactNode
 * which allows Alert component to receive HTML markup / string
 * just like normal HTML tags
 */
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
