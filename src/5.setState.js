//setState是异步函数
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props)

    //性能优化的bind方式
    this.dianji = this.dianji.bind(this);

    this.state={
      count:1
    }
  }

dianji(){
  //setState是异步函数
  this.setState({
    count:this.state.count + 1
  },()=>{
//异步回调,数据修改完后触发
  console.log(this.state.count)
  })



//react底层代码实现了将setState合并为一个去执行
  // this.setState({
  //   count:this.state.count + 1
  // })
  // this.setState({
  //   count:this.state.count + 1
  // })
  // this.setState({
  //   count:this.state.count + 1
  // })
  // this.setState({
  //   count:this.state.count + 1
  // })
  // this.setState({
  //   count:this.state.count + 1
  // })

  //实现加5的功能
  // this.setState((prevState)=>({
  //   count:prevState.count + 1
  // }))
  // this.setState((prevState)=>({
  //   count:prevState.count + 1
  // }))
  // this.setState((prevState)=>({
  //   count:prevState.count + 1
  // }))
  // this.setState((prevState)=>({
  //   count:prevState.count + 1
  // }))
  // this.setState((prevState)=>({
  //   count:prevState.count + 1
  // }))

}

  render(){
    return(
      <div>
        { this.state.count }
        <button onClick={ this.dianji }>+1</button>
      </div>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
