import ListGroup from "./components/ListGroup";

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
  return (
    <div>
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
    </div>
  );
}

export default App;
