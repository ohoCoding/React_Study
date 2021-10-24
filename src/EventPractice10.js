import React, { useState } from 'react';

const EventPractice10 = () => {
    const [ form , setForm ] = useState({
        username: '',
        message: ''
    });
    const [ username , message ] = form;
    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 from내용을 이자리에 복사 
            [e.target.name] : e.target.value // 원하는 값 덮어쓰워
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ':' + message);
        setForm({
            username : '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1> 이벤트 연습 </h1>
            <input 
             type = "text"
             name = "username"
             placeholder = "사용자명"
             value ={username}
             onChange = {onChange}
            />
            <input 
             type = "text"
             name = "message"
             placeholder = "아무거나 입력해보세요"
             value = {message} 
             onChange = {onKeyPress}
             />
             <button onClick = {onClick}>확인</button>
        </div>
    );
};
export default EventPractice10;