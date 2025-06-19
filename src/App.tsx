import ListGroup from "./components/ListGroup";

function App() {
  /*
   * NOTE: even we create 2 components which are exactly the same,
   * they have 2 independent states from each other.
   *
   * React keep tracking the state of each components and update them in the DOM
   * when there's a change in the component's state without the need
   * to query the element in the DOM.
   */
  return (
    <div>
      <ListGroup />
      <ListGroup />
    </div>
  );
}

export default App;
