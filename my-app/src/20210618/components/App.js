import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "../routes/About";
import Home from "../routes/Home";
import Navigation from "./Navigation";

function App() {
/**
|--------------------------------------------------
| Route -> 해당경로일때 해당컴포넌트를 출력함.
| 이떄 경로가 겹치면 겹치는 것을 모두 rendering해버리는 문제가있음
| 예) /a 인 라우터 A와 /a/b인 라우터 B, /인 라우터 C가있을떄
| ~~~/a/b 링크를 호출하면, C,A,B 순으로 호출되어
| 3개가 전부 화면에 나오게된다. 이를 막기위해 exact를 사용하는데
|  exact가 선언되면, 완벽히 같지 않다면 랜더링하지않게된다.
|--------------------------------------------------
*/

  return (
    <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
    </HashRouter>
  )
}
export default App;