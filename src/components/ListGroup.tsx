import { useState } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  /* Return multi lines of code in React is not allowed,
   * use <></> to wrap the code to tell React to use Fragment
   *
   * In React, list item must have key value asigned.
   */

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");
  /*
   * The useState is an array that has 2 elements:
   * const arr = useState(-1);
   * arr[0] = selectedIndex
   * arr[1] = setSelectedIndex
   *
   * Therefore, we can write it as:
   * const [selectedIndex, setSelectedIndex] = useState(-1);
   *
   * We can create mulitple states for the same component in the same way.
   */
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
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
}

export default ListGroup;
