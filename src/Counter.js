import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {    // 컴포넌트의 생성자 메서드 
        super(props)       // 클래스형 컴포넌트에서 costructor를 작성할 때 반드시 super(props) 호출
                            // 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 Component클래스가 지닌 생성자 함수 호출 
            //state 초기값 설정 
            this.state = {
                number: 0
            };
        }
      render(){
          const { number } = this.state; //state를 조회할때 this.state로 조회
          return(
              <div>
                  <h1>{number}</h1>
                  <button 
                    // onClick을 통해 버튼이 클릭되었을때 호출함 함수를 지정
                    onClick = {() =>{
                        //this.setState를 사용해 state에 새로운 값을 넣을 수 있습니다 
                        this.setState({ number: number+1 });
                    }}
                  >
                 +1 </button>
              </div>
          );
    }
}
export default Counter;