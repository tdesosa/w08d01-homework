import React, { Component } from 'react';


class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0,
      inputBox: ''
    }
  }
  handleChange = (event) => {
    this.setState({inputBox: event.target.value});
  }
  handleDepositClick = (event) => {
    event.preventDefault();
    const depositAmount = parseInt((this.state.inputBox), 10);

    const updatedBalance = this.state.balance + depositAmount

    this.setState({
      balance: updatedBalance
    });

    this.setState.inputBox = '';
  }
  handleWithdrawClick = (event) => {
    event.preventDefault();
    const withdrawAmount = parseInt((this.state.inputBox), 10);

    const updatedBalance = this.state.balance - withdrawAmount

    this.setState({
      balance: updatedBalance
    });

    this.setState.inputBox = '';
  }
  render() {
    let balanceClass = 'balance';
 
    if (this.state.balance === 0) {
      balanceClass = 'zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <form>
          <input type="text" value={this.state.inputBox} onChange={this.handleChange} placeholder="enter an amount" />
          <input type="button" value="Deposit" onClick={this.handleDepositClick} />
          <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
        </form>
      </div>
    )
  }
}

export default Account;
