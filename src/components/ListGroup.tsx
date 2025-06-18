function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  /* Return multi lines of code in React is not allowed,
   * use <></> to wrap the code to tell React to use Fragment
   *
   * In React, list item must have key value asigned.
   */
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
