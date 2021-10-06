import React, { Component } from 'react';

class Counter5 extends Component {
    //constructor 메서드를 사용하지 않고 state 초기값 설정 가능 
    state = {
        Counter5Number: 0,
        Counter5FixedNumber: 0,
    };
    render() {
        const { Counter5Number, Counter5FixedNumber } = this.state; //state를 조회할때 this.state로 조회
        return(
            <div>
                <h1> Counter5바뀌는 값 : {Counter5Number} </h1>
                <h2> Counter5바뀌지 않는 값: {Counter5FixedNumber} </h2>
                <button 
                  //onClick을 통해 버튼이 클릭되었을 떄 호출할 함수를 지정 
                  onClick = {() => {
                      this.setState(
                          {
                              Counter5Number: Counter5Number + 1
                          },
                          () => {
                              console.log('방금 setState가 호출');
                              console.log(this.state);
                          }
                      );
                  }}
                >
                 +1   
                </button>
            </div>
        )
    }
}
export default Counter5;