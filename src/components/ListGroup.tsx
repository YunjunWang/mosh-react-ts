import { useState, type MouseEvent } from "react";

/** Allow inputs for components:
 * 1. Define types for properties required for this component
 *    by using TypeScript interface, called props:
 *  - data: immutable(read-only), never modify them inside the component
 *  - function
 *
 * 2. Pass the properties into this component,
 * 3. Destructure the elements of the properties
 *    in props Props to avoid repeatitive coding
 */
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  /** Use Fragments:
   * Return multi lines of code in React is not allowed,
   * use <></> to wrap the code to tell React to use Fragment
   *
   * In React, list item must have key value asigned.
   */

  /** state and local variable:
   * The variable mySelectedIndex won't be used
   * in the UI element of this component
   * as it is local to this function component, React isn't
   * aware of it.
   * To allow it to be used, need to use React useState to tell
   * React that this component has data as selectedIndex that might change.
   */
  let mySelectedIndex = 0;

  /** useState:
   * This built-in function useState is called a Hook.
   * We can give it an initial value.
   * The useState returns an array that has 2 elements:
   * const arr = useState(-1);
   * arr[0] is the variable
   * arr[1] is the updater function
   *
   * Therefore, we can write it as:
   * const [selectedIndex, setSelectedIndex] = useState(-1);
   *
   * We can create mulitple states for the same component in the same way.
   */
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");

  /** Event handling:
   * We can move event handling logic out of the JSX markup
   * and create it separately here.
   *
   * TypeScript requires us to specify
   * the type of function parameters explicity for type safety.
   *
   * To know it is coming from TypeScript, hover over mouse on the parameter,
   * and will get this error message:
   * Parameter 'event' implicitly has an 'any' type.ts(7006)
   * (parameter) event: any
   * : MouseEvent
   *
   * @param event — : MouseEvent
   *
   * When we have inline event handler code, React will be able to know
   * which type of event it is handling;
   * however, when we create an event handler function out of the FSX markup,
   * TypeScript can't interpret the code to know what is the event type
   * that is expecting.
   *
   * @param event: MouseEvent
   */
  const handleBtnClick = (event: MouseEvent) => {
    /**
     * We will get the React SythenticBaseEvent here
     * which is a wrapper class for the DOM event that
     * is cross-browser.
     */
    console.log(event);
  };
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <button type="button" className="btn btn-light" onClick={handleBtnClick}>
        Base Button 1
      </button>

      <button
        type="button"
        className="btn btn-light"
        onClick={(event) => {
          console.log(event);
        }}
      >
        Base Button 2
      </button>
    </>
  );
}

export default ListGroup;
