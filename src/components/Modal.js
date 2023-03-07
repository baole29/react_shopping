import React, { Component } from "react";
import Context from "./store/Context";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: this.props.product.productName,
      productColor: this.props.product.productColor,
      productType: this.props.product.productType,
      productPrice: this.props.product.productPrice,
      productAmount: this.props.product.productAmount
    };
  }

  componentDidMount() {
    this.dispatch = this.context[1];
  }

  hide = () => {
    this.props.parentCallback(false);
  };

  handleUpdate = (event) => {
    const product = {
      id: this.props.product.id,
      productName: this.state.productName,
      productColor: this.state.productColor,
      productType: this.state.productType,
      productPrice: this.state.productPrice,
      productAmount: this.state.productAmount
    };

    this.dispatch({type: 'update', preProduct: this.props.product, updatedProduct: product})
    this.props.parentCallback(false);
  };

  handleAdd = (event) => {

    let products = this.context[0].products;
    let product = 
      { id: products.at(-1).id +1, productName: this.state.productName, 
      productPrice: this.state.productPrice, 
      productType: this.state.productType,
      productColor: this.state.productColor,
      productAmount: this.state.productAmount
    };

    this.dispatch({type: 'add', product: product})

      // products.push(product);
      this.props.parentCallback(false);
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    });
  };

  render() {
    return (
      <div className="w-full">
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="place-content-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden
           overflow-y-auto md:inset-0 h-modal"
        >
          <div className="relative w-full h-full max-w-md md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                onClick={this.hide}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 
                hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center 
                dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                {this.props.modalType === "add" ? (
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Add product
                  </h3>
                ) : (
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Update product
                  </h3>
                )}

                <form className="space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      onChange={this.handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={this.state.productName}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product color
                    </label>
                    <input
                      type="text"
                      onChange={this.handleChange}
                      name="productColor"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={this.state.productColor}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product type
                    </label>
                    <select
                      value={this.state.productType}
                      name="productType"
                      onChange={this.handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>---</option>
                      <option value="Keyboard">Key board</option>
                      <option value="Mouse">Mouse</option>
                      <option value="Monitor">Monitor</option>
                      <option value="MousePad">MousePad</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product price
                    </label>
                    <input
                      type="number"
                      onChange={this.handleChange}
                      name="productPrice"
                      value={this.state.productPrice}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product amount
                    </label>
                    <input
                      type="number"
                      onChange={this.handleChange}
                      name="productAmount"
                      value={this.state.productAmount}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  {this.props.modalType === "add" ? (
                    <button
                      type="button"
                      onClick={this.handleAdd}
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={this.handleUpdate}
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Update
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.contextType = Context;
