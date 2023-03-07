import React, { Component } from "react";
import { createRef } from "react";
import { Bar, Doughnut, Bubble } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Context from "../store/Context";
Chart.register(...registerables);

class RevenueStatistical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataChart: {
        labels: Array.from(
          [...Array(props.datas.length).keys()],
          (x) => `day ${x + 1}`
        ),
        datasets: [
          {
            label: "Revenue (milions dollard)",
            backgroundColor: Array.from(
              [...Array(props.datas.length).keys()],
              (x) => "rgb(60, 152, 214)"
            ),
            data: props.datas,
          },
        ],
      },
      dateRef: createRef(),
    };
  }

  handleChange = (e) => {
    console.log(e);
  };

  render() {
    const widget1 = this.context[0]["statistical"]["widget1"];
    const widget2 = this.context[0]["statistical"]["widget2"];
    const widget3 = this.context[0]["statistical"]["widget3"];
    return (
      <div>
        <div className="flex justify-between">
        </div>
        <div className="p-1 grid grid-cols-4 gap-4 grid-row-4">
          {widget1.map((data) => {
            return <Widget1 data={data} />;
          })}
          <div className="w-[100%] h-[500px] col-span-4 row-span-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative w-40">
              <input
                onChange={this.handleChange(this.state.dataChart)}
                ref={this.state.dateRef}
                type="month"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <Bar
              data={this.state.dataChart}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
          <div className="mt-6 col-span-2">
            <Widget2 datas = {widget2}/>
          </div>
          <div className="mt-6 col-span-2">
            <Widget3 data={widget3}/>
          </div>
        </div>
      </div>
    );
  }
}

class Widget1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div class="p-4 h-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
          <p className="text-3xl">{this.props.data.title}</p>
          <p className="text-4xl font-fat text-blue-600">
            {this.props.data.value}
          </p>
          <div className="flex">
          <p className="mr-3 text-xl text-green-700">{this.props.data.increment}</p>
          <svg
            class="w-5 h-6 mb-2 text-white-500 dark:text-white-400"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 4L12 20"
                stroke="#98c51b"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
              <path
                d="M18 10L12.0625 4.0625V4.0625C12.028 4.02798 11.972 4.02798 11.9375 4.0625V4.0625L6 10"
                stroke="#98c51b"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
          <p className="ml-2">last month</p>
          </div>
          
        </div>
      </div>
    );
  }
}

class Widget2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <div>
        <p className="text-3xl text-blue-800 mb-4">Top product sell</p>
        <table class="p-1 border-separate border-spacing-7 border-slate-400 border-collapse bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 table-flex">
          <thead>
            <th className="text-left text-lg text-blue-600"> Product name </th>
            <th className="text-left text-lg text-blue-600"> Product price </th>
            <th className="text-left text-lg text-blue-600"> Revenue </th>
          </thead>
          <tbody>
          {
            this.props.datas.map((data)=>{
              return <tr>
                <td>{data.product.productName}</td>
                <td className="text-sky-600">{data.product.productPrice}$</td>
                <td className="text-green-800">{data.revenue}$</td>
              </tr> 
              
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}


class Widget3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataChart: {
        labels: ['Keyboard','Mouse','Monitor','MousePad'],
        datasets: [
          {
            label: "Statistical (product)",
            backgroundColor: Array.from(
              [...Array(props.data.length).keys()],
              (x) => "rgb(" +
              Math.floor(Math.random() * 255) + "," +
              Math.floor(Math.random() * 255) + "," +
              Math.floor(Math.random() * 255) + ")"
            ),
            data: props.data,
          },
        ],
      },
    }
  }
  render() {
    return (
      <div>
        <p className="text-3xl text-blue-800 mb-4"> Statistical by category </p>
        <Doughnut data={this.state.dataChart}/>
      </div>
    );
  }
}



export default RevenueStatistical;

RevenueStatistical.contextType = Context;
