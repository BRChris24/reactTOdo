import React from "react";

function Todoitem(props) {
  const [isDone, setisDone] = React.useState(false);
  function handleClick() {
    setisDone((prev) => !prev);
  }
  return (
    <div onClick={handleClick}>
      <li syle={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default Todoitem;
