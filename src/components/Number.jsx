import React from "react";
import "./Number.scss";

export default function Number(props) {
  const num = props.klasa;
  const classe = `number-container ` + num;
  return (
    <div className={classe}>
      {[...Array(7)].map((e, i) => {
        const classes = `number-line ` + i;
        return <div className={classes} key={i}></div>;
      })}
    </div>
  );
}
