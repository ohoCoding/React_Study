import React, { Component } from 'react';

class EventPractice4 extends Component {
    state = {
        message: ''
    }

    render(){
        return(
            <div>
                <h1>버튼을 누를때 comment 값을 공백으로 설정 </h1>
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
               <button onClick = {
                   () => {
                       alert(this.state.message);
                       this.setState({
                           message:''
                       });
                   }
               }> 확인 </button>
            </div>
        );
    }
}
export default EventPractice4;