import React, { Component } from 'react';

class Counter4 extends Component {
    //construcotr 메서드를 사용하지 않고도 state 초기값 설정 가능 
    state = {
        Counter4number: 0,
        Counter4fiexdNumber: 0
    };
    render(){
        const { Counter4number, Counter4fiexdNumber } = this.state; // state를 조회할 때 this.state로 조회
        return(
            <div>
                <h1> Counter4바뀌는값 : {Counter4number} </h1>
                <h2> Counter4바뀌지 않는 값: {Counter4fiexdNumber} </h2>
                <button 
                  //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정 
                  onClick = {() => {
                      //this.setState를 사용해 state에 새로운 값을 넣을 수 있다
                      //this.setState({ Counter3number: Counter3number+1});
                      //this.setState({ Counter3number: this.state.Counter3number+1})
                      // => this.setState를 두 번 사용하는 것임에도 불구하고 버튼을 클릭할 때 숫자가 1씩 더해집니다
                      //    그 이유는 this.setState를 사용한다고 해서 state 값이 바로 바뀌지 않기 때문
                      
                      // 객체 대신에 함수를 인자로 넣으면 this.setState를 두번 사용할때 오류 방지  
                      this.setState((prevState, props) => {
                          return{
                            Counter4number: prevState.Counter4number + 1
                          };
                      });
                      // 화살표함수 에서 값을 바로 반환하고 싶으면 코드블록 {} 를 생략 
                      // ex) const sum = (a,b) => a+b;
                      this.setState(prevState => ({
                        Counter4number: prevState.Counter4number + 1
                      }));
                      
                  }}
                > +1 </button>
            </div>
        );
    }
}
export default Counter4;