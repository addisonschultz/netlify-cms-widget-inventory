import PropTypes from "prop-types";
import React from "react";

export default function Preview({ value }) {
  console.log("VALUE", value);

  return (
    <div>
      {JSON.stringify(value)}
      {/* {inventory.map((x, index) => {
        <>
          <h4>Size</h4>
          <h4>Size</h4>

          <h4>Quantity</h4>
          <h4>Quantity</h4>
        </>;
      })} */}
    </div>
  );
}

Preview.propTypes = {
  value: PropTypes.node
};
