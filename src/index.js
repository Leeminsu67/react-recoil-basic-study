import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";

// Atom은 상태의 일부를 나타냄
// 어떤 컴포넌트에서나 읽고 쓸 수 있습니다.
// 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독합니다.
// atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트들이 재랜더링 되는 결과가 발생합니다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
