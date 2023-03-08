import React, { Component } from "react";
import Context from "../store/Context";
import RevenueStatistical from "./RevenueStatistical";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revenue: this.context
    }
  }

  componentDidMount() {
    this.setState({
      revenue: this.context[0]['statistical']['revenue'][0]['day']
    })
  }

  render() {
    return (
      <div>
        <RevenueStatistical datas = {this.context[0]['statistical']['revenue'][0]['day']}/>
      </div>
    );
  }
}

export default Dashboard;

Dashboard.contextType = Context;
