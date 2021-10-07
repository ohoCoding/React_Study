import React, { useState } from 'react';

const Say = () => {
    //useState 함수의 인자에는 상태의 초깃값을 넣어줍니다 
    // 클래스형 컴포넌트에서의 state 초기값은 객체 형태를 넣어 주어야 합니다
    // useState에서는 반드시 객체가 아니어도 상관없고 값의 형태는 자유 
    const [message, setMessage ] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!')
    const onClickLeave = () => setMessage('안녕히 가세요!');

    return (
        <div>
            <button onClick = {onClickEnter}>입장 </button>
            <button onClick = {onClickLeave}>퇴장 </button>
            {/* 함수를 호출하면 배열 반환 & 배열의 첫 번쨰 원소는 현재상태 , 두번째 원소는 상태를 바꿔주는 함수*/}
            <h1>{message}</h1> 
        </div>
    );
};
export default Say;