import React, { Component } from 'react';

class Test extends Component {
  /**
   * ccs-> 컴포넌트, 스테이트가 있는 class만들어줌
   */
  state = {
    num: 1,
    num2: 2,
  }
  // ============================================================
  // State 추가부분 
  // ============================================================
  add= () => {
    this.setState(current => ({ num: current.num + 1 }));
  };
  min= () => {
    this.setState(current => ({ num: current.num - 1 }));
  };
  /**
  |--------------------------------------------------
  | 생명주기
  |--------------------------------------------------
  */
  constructor(props) {
    super(props);
    console.log("constructor is called!");
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);
    console.log("scu is called!")
    return this.state !== prevState.data;
  }

  componentDidMount() {
    console.log("cdm is called!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("cdu is called!");
  }
  componentWillUnmount() {
    console.log("cwum is called!");
  }
  componentDidCatch(error, info) {
    console.log("cdc is called!");
  }

  /**
  |--------------------------------------------------
  | cmmb. 랜더링
  |--------------------------------------------------
  */
  render() {
    console.log("it running now!");
    return (
      <div>
        <h1>it num is {this.state.num} </h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.min}>min</button>
      </div>
      
    );
  }
}

export default Test;