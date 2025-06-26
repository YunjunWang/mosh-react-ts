import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
/**
 * By default when import from a folder without file name,
 * it will import everything from the index.ts file
 * that has been exported from it.
 * This way makes the code much more cleaner.
 */
import NativeCss from "./components/NativeCss";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  /** Component state independency:
   * NOTE: even we create 2 components which are exactly the same,
   * they have 2 independent states from each other.
   */

  /** How React works:
   * React keep tracking the state of each components and update them in the DOM
   * when there's a change in the component's state without the need
   * to query the element in the DOM.
   */

  /** Passing props into components:
   * 1. Define child component's required properties in parent component:
   * - Data
   * - Function - events that should be handled by parent component so the child component can remain reusable
   * 2. Pass child component's properties
   * - Data: There're 2 different ways to pass static values e.g., a string showing
   * in the heading prop below, can be with/without {}.
   * For variables, we need to always wrap it with {}.
   * - Function: You can pass function as separate defined function variable or inline code
   */
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  /**
   * Pass children HTML markup into
   * the Alert component in between its tags
   * just like normal HTML tags.
   */
  /**
   * Can skip passing default properties to child components
   * e.g., color in Button component
   */

  /**
   * set states for the alert:
   * alertVisible for showing/hiding the alert
   * setAlertVisible(value: boolean) to set the alertVisible
   *
   * onClose/onClick to call setAlertVisible(value: boolean)
   */
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <NativeCss items={items}>NativeCss</NativeCss>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello <span>world!</span>
        </Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities 1"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={items}
        heading={"Cities 2"}
        onSelectItem={(selectedItem) => {
          console.log(selectedItem);
        }}
      />
      <div>
        <Button onClick={() => setAlertVisible(true)}>Base Button 1</Button>

        <Button
          color="secondary"
          onClick={() => {
            console.log("Clicked button 2");
          }}
        >
          Base Button 2
        </Button>
      </div>
    </>
  );
}

export default App;
