/**
 * color? to make it non-required
 * 'primary' | 'secondary' | 'danger' tells TypeScript what values are allowed
 * color = 'primary' sets the default value if not given by its parent component
 */
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
