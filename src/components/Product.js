import React, { Component } from "react";
import Modal from "./Modal";
import Context from "./store/Context";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      products: [],
      product: {},
      modalType: ''
    };
  }

  handleCallback = (isOpen, product, modalType) => {
    this.setState({ isOpen: isOpen, product: product, modalType: modalType });
  };

  componentDidMount() {
    this.setState({
      products: this.context[0].products,
    });
  }

  handleChange = (event) => {
    const target = event.target;
    this.setState({
      products: this.context[0].products.filter((el, index, array) => {
        return el.productName.toLowerCase().includes(target.value);
      }),
    });
  };

  handleAdd = () => {
    this.setState({
      modalType: "add",
      isOpen: true,
      product: {}
    })
  }


  render() {
    return (
      <div>
        {this.state.isOpen && <Modal parentCallback={this.handleCallback} product={this.state.product} modalType={this.state.modalType}/>}
        <div className="mb-10 w-11/12 flex justify-between">
          <input
            type="text"
            name="search"
            onChange={this.handleChange}
            className="bg-gray-50 border 
              border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
              focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
              dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Type something..."
            required
          />
          <button
            type="button"
            onClick={this.handleAdd}
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 
                focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          >
            Add product
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" colSpan="2" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product, index) => {
                return (
                  // console.log(this.state.isOpen),
                  <ProductItem
                    product={product}
                    accessskey={index}
                    parentCallback={this.handleCallback}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    this.dispatch = this.context[1];
  }

  hide = () => {
    this.props.parentCallback(!this.state.isOpen, this.props.product, "update");
  };

  deleteProduct(index) {
    this.dispatch({ type: "delete", index: index });
  }
  render() {
    return (
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap 
              dark:text-white"
        >
          {this.props.product.productName}
        </th>
        <td className="px-6 py-4">{this.props.product.productColor}</td>
        <td className="px-6 py-4">{this.props.product.productType}</td>
        <td className="px-6 py-4">{this.props.product.productPrice}</td>
        <td className="px-6 py-4">{this.props.product.productAmount}</td>
        <td className="px-6 py-4">
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 
                focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 
                hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 
                dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
                dark:hover:bg-gray-700"
            onClick={this.hide}
          >
            Edit
          </button>
        </td>
        <td className="px-6 py-4">
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 
                focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
                dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => this.deleteProduct(this.props.accessskey)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

Product.contextType = Context;
ProductItem.contextType = Context;

export default Product;
