import React, { Component } from 'react';

class Test extends Component {
  /**
   * ccs-> 컴포넌트, 스테이트가 있는 class만들어줌
   * 생명주기 컴포넌트
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
  
/**
|--------------------------------------------------
| 생명주기중 가장 먼저 실행되는 function. 
| 기본적인 Render보다 먼저 실행된다. 
|--------------------------------------------------
*/
  constructor(props) {
    super(props);
    console.log("constructor is called!");
  }


/**
|--------------------------------------------------
| 컴포넌트가 변경되면 실행되는 function.
| Render하기전 유효성을 체크하며, true인경우 페이지를 랜더링,
| false라면 랜더링 하지 않는다.
|--------------------------------------------------
*/
  shouldComponentUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);
    console.log("scu is called!")
    return this.state !== prevState.data;
  }

/**
|--------------------------------------------------
| 컴포넌트가 완전히 Mount, 랜더링이 완료되면 실행되는function.
|--------------------------------------------------
*/

  componentDidMount() {
    console.log("cdm is called!");
  }

/**
|--------------------------------------------------
| 컴포넌트가 update, 예를들어 State가 변경되었다거나
| reRendering하게되면 실행되는 function
|--------------------------------------------------
*/
  componentDidUpdate(prevProps, prevState) {
    console.log("cdu is called!");
  }

/**
|--------------------------------------------------
| 컴포넌트가 페이지 이동등으로 unMount될때 실행되는 function
|--------------------------------------------------
*/

  componentWillUnmount() {
    console.log("cwum is called!");
  }

/**
|--------------------------------------------------
| 컴포넌트가 무언가의 이유로 error를 발생시켰을떄
| 실행되는 function. try-catch의 catch라고 보면된다.
|--------------------------------------------------
*/

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