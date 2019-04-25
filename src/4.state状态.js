//组件的state（组件的状态）
import React from 'react';
import ReactDOM from 'react-dom';


class Hello extends React.Component{
//类可以定义构造函数，如定义了，就必须在构造函数第一行代码调用 父类的构造函数，也就是super() 方法
  constructor(props){
    super(props);

    this.state = {
      name:'zhangsan',
      age:18
    }
  }

//state不允许直接修改，要用setState
  fn1(){
    this.setState({
      name:'lisi',
      age:20
    })
  }

//事件使用驼峰写法onClick,事件处理函数不能加括号,this指向需关注，一半要用 .bind(this) 改变
  render(){
    return(
      <div>
        react
        <p>{ this.state.name }</p>
        <p>{ this.state.age }</p>
        <button onClick={ this.fn1.bind(this) }>改name</button>
      </div>
    )
  }
}



ReactDOM.render(
  <div>
    <Hello></Hello>
  </div>,
  document.getElementById('root')
)
