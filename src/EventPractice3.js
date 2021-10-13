import React, { Component } from 'react';

class EventPractice3 extends Component {

    //input의 value 값을 stat에 있는 값으로 설정 
    state = {
        message: '',
    }
    render(){
        return(
            <div>
                <h1>state에 input 값 담기</h1>
                <input 
                 type ="text"
                 name ="message"
                 placeholder = "아무거나 입력하세요"
                 value = { this.state.message}
                 onChange = {
                     (e) => {
                         this.setState({
                             message: e.target.value
                         })
                     }
                  }
               />
            </div>
        );
    }
}
export default EventPractice3;