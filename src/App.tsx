import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  /*
   * NOTE: even we create 2 components which are exactly the same,
   * they have 2 independent states from each other.
   *
   * React keep tracking the state of each components and update them in the DOM
   * when there's a change in the component's state without the need
   * to query the element in the DOM.
   *
   * There're 2 different ways to pass static values e.g., a string showing
   * in the heading prop below, can be with/without {}.
   * For variables, we need to always wrap it with {}.
   */
  return (
    <div>
      <ListGroup items={items} heading="Cities 1" />
      <ListGroup items={items} heading={"Cities 2"} />
    </div>
  );
}

export default App;
