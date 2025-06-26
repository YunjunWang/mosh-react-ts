import { useState } from "react";
/**
 * Use my own native CSS class in this component.
 */
import "./NativeCss.css";

interface Props {
  children: string;
  items: string[];
}

const NativeCss = ({ children, items }: Props) => {
  let [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{children}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="my-list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "my-list-group-item my-active"
                : "my-list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NativeCss;
