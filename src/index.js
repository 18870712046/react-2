// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <p>1</p>,
//   document.getElementById('root')
// )


//首字母必须要大写,return内容较多使用小括号

import React from 'react';
import ReactDOM from 'react-dom';
import adc from 'prop-types';

//函数定义组件,解构赋值写法
function Hello({ name,age }){
  //console.log(props)
  return(
    <div>
      hello
      <Word name="lisi" age={20}></Word>
      <p>{ name }</p>
      <p>{ age }</p>
    </div>
  )
}


//函数的组件的props校验
Hello.propTypes = {
  name:adc.string,
  age:adc.number
}

//必须继承基础组件React.Component
//类定义组件
//带参要用this
class Word extends React.Component{
  render(){
    return(
      <div>
        reacts
        <p>{ this.props.name }</p>
        <p>{ this.props.age }</p>
      </div>
    )
  }
}


//类的组件的props校验
Word.propTypes = {
  name:adc.string,
  age:adc.number
}



ReactDOM.render(
  <Hello name="zhnagsan" age={18}></Hello>,
  document.getElementById('root')
)



