import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <h1>hello react</h1>,
//    document.getElementById('root'));


// 使用 createElement
ReactDOM.render(
  React.createElement('div', null, [
    React.createElement('h1', { key: '100', id: 'box' }, 'Hello React'),
    React.createElement('p', { key: '101' }, '我是一个p')
  ]),
  document.getElementById('root')
)
