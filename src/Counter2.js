import React, {Component} from 'react';

class Counter2 extends Component {
    constructor(props) {    // 컴포넌트의 생성자 메서드 
        super(props)       // 클래스형 컴포넌트에서 costructor를 작성할 때 반드시 super(props) 호출
                            // 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 Component클래스가 지닌 생성자 함수 호출 
            //state 초기값 설정 
            this.state = {
                Counter2number: 0,
                fixedNumber: 0
            };
    }
    render() {
        const { Counter2number , fixedNumber } = this.state; //state를 조회할 때 this.state로 조회 
        return(
            <div>
                <h1> Counter2 바뀌는값 : {Counter2number} </h1>
                <h2> Counter2 바뀌지 않는 값 : {fixedNumber} </h2>
                <button 
                  //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정 
                  onClick = {() => {
                      //this.setState를 사용해 state에 새로운 값을 넣을 수 있다 
                      this.setState({ Counter2number: Counter2number+1});
                  }}
                > +1 </button>
            </div>
        );
    }
}
export default Counter2;