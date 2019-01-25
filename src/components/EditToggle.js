import React from "react";

export default function EditToggle(props) {
  return (
    <select
      className="dropDownContainer ml0"
      onChange={event => {
        props.update(event.target.value);
      }}
      disabled={props.allowEdit === "false"}
    >
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  );
}
