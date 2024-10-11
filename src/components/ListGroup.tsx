import { useState } from "react";

function ListGroup() {
  const items = ["1", "2", "3", "4", "5"];
  const [selceted, setter] = useState(-1);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selceted === index ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setter(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
