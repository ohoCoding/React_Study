import React, { Component } from 'react';

class EventPractice2 extends Component {
    render(){
        return (
            <div>
                <h1> 함수형 컴포넌트 이벤트 연습2 </h1>
                <div> onChange 이벤트 설정 </div>
                <input 
                    type ="text"
                    name="message"
                    placeholder = "아무거나 입력하세요"
                    onChange = { 
                        ( e ) => { 
                            console.log(e.target.value);
                        }
                    }
                />
            </div>
        );
    }
}
export default EventPractice2;