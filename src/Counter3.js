import React, { Component } from 'react';

class Counter3 extends Component {
    //construcotr 메서드를 사용하지 않고도 state 초기값 설정 가능 
    state = {
        Counter3number: 0,
        Counter3fiexdNumber: 0
    };
    render(){
        const { Counter3number, Counter3fiexdNumber } = this.state; // state를 조회할 때 this.stat로 조회
        return(
            <div>
                <h1> Counter3바뀌는값 : {Counter3number} </h1>
                <h2> Counter3바뀌지 않는 값: {Counter3fiexdNumber} </h2>
                <button 
                  //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정 
                  onClick = {() => {
                      //this.setState를 사용해 state에 새로운 값을 넣을 수 있다 
                      this.setState({ Counter3number: Counter3number+1});
                  }}
                > +1 </button>
            </div>
        );
    }
}
export default Counter3;