import React from 'react';
import logo from './logo.svg';
import './App.css';

 {/* 
  작성자: lch
  작성일 : 2030. 5.30.
  내용: 기능에 대한 내용
 */}

function App() {
  let name = "리액트";
  const style = {
    backgroundColor : 'black',
    color : 'white',
    fontSize : '48px',
    fontWeight: 'bold',
    padding : '20px'
  }

  return (
      <div className="style">
          <h1 className="test">
              Hello,
              {name === "리액트" ? <h1>YES</h1> : null}!!
          </h1>
      {/* <p>반갑습니다.</p>  */}
      </div>
  );  
}

export default App;
