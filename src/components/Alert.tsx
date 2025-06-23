import { type ReactNode } from "react";

/**
 * Define Props for the Alert component using ReactNode
 * which allows Alert component to receive HTML markup / string
 * just like normal HTML tags
 */

/**
 * Create an Alert component with css class: alert-dismissible
 * add the button with data-bs-dismiss="alert"  and onClick={onClose}  event
 * Create Props for this component with: onClose: () => void;
 */
interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
