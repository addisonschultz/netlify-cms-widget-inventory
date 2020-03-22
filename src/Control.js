import PropTypes from "prop-types";
import React from "react";

export default class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inventory: [1] };
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    classNameWrapper: PropTypes.string.isRequired
  };

  addItem = () => {
    this.setState(prevState => {
      const inventory = [...prevState.inventory, 1];
      return {
        inventory: inventory
      };
    });
  };

  removeItem = () => {
    this.setState(prevState => {
      const inventory = prevState.inventory.splice(-1, 1);
      return {
        inventory: inventory
      };
    });
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);
    console.log(name);

    this.setState({ [name]: value }, () => {
      const noInventoryState = { ...this.state };
      delete noInventoryState.inventory;
      this.props.onChange(noInventoryState);
    });
  };

  render() {
    const { classNameWrapper } = this.props;

    return (
      <div>
        <h3 style={{ paddingTop: 10 }}>
          Please use descriptive names for the sizes, as this will appear in the
          website (i.e. "Small", "Extra Large", "32 x 30")
        </h3>
        <button onClick={this.addItem} style={{ paddingLeft: 0 }}>
          Add Size
        </button>
        <button onClick={this.removeItem}>Clear</button>

        {this.state.inventory.map((size, index) => {
          return (
            <div style={{ display: "flex", paddingTop: 10 }} key={index}>
              <div>
                <label for="sizeInput">Size</label>
                <input
                  type="text"
                  id="sizeInput"
                  name={`size-input-${index}`}
                  placeholder={"Small, 32 x 32, etc"}
                  className={classNameWrapper}
                  onChange={this.handleChange}
                  style={{ marginTop: 10 }}
                />
              </div>
              <h1 style={{ padding: "35px 10px 10px 10px" }}>:</h1>
              <div>
                <label for="quantityInput">Quantity</label>
                <input
                  type="number"
                  id={"quantityInput"}
                  name={`quantity-input-${index}`}
                  placeholder={0}
                  className={classNameWrapper}
                  onChange={this.handleChange}
                  style={{ marginTop: 10 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
