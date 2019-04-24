import React from 'react';
//这里不需要引入ReactDOM，一个项目入口js文件引入一次就可以
import logo from './logo.svg';
//webpack使用图片，都需要将图片使用模块引入进来，如果是项目中的图片，需要import进来
import './App.css';

//函数定义组件
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
