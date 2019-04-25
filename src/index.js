import React from 'react';
import ReactDOM from 'react-dom';


//状态提升
function inputProtected(input){
  if(Number.isNaN(input) || input <= 0){
      return '';
  }else{
      return Math.floor(input).toString();
  }
}
let dataTitle = {
  m:'需要花多少钱：',
  n:'能买这么多个：'
};

class Calculation extends React.Component{
  render(){
      let data = this.props.data;
      let title = this.props.title;
      let changeDate = this.props.changeDate;
      return (
          <div>
              <fieldset>
                  <legend>{title}</legend>
                  <input type="text" value={data} onChange={changeDate}/>
              </fieldset>
          </div>
      );
  }
}

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {type:'money',input:''};
  }
  handleDate(type,e){
      if(type === 'money'){
          this.setState({type:'money',input:e.target.value});
      }else if(type === 'number'){
          this.setState({type:'number',input:e.target.value});
      }
  }
  convertNumber(input){
      return Math.floor(input/20);
  }
  convertMoney(input){
      return input * 20;
  }
  render(){
      let input = this.state.input;
      let type = this.state.type;
      let number = type==='money'  ? inputProtected(this.convertNumber.bind(this,input)()) : input;
      let money  = type==='number' ? inputProtected(this.convertMoney.bind(this,input)()) : input;
      return (
          <div>
              <h4>价格：20元一个</h4>
              <Calculation
                  data={money}
                  title={dataTitle.m}
                  changeDate={(e)=>this.handleDate('money',e)}
              />
              <Calculation
                  data={number}
                  title={dataTitle.n}
                  changeDate={(e)=>this.handleDate('number',e)}
              />
          </div>
      );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
