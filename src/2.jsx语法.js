import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './logo.svg';

const Login = false;

ReactDOM.render(
  <div>
    {/* <p>react</p> */}
    <img src={ Logo } alt="" />
    <label htmlFor='hh'>姓名</label>
    <input type="text"  id="hh"/>
    {
      !Login?<button>登录</button>:''
    }
  </div>,
  document.getElementById('root')
)
