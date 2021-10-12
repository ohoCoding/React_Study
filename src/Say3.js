import React, { useState } from 'react';

const Say3 = () => {
    const [ message2, setMessage2 ] = useState('안녕 초기값3');
    const onClickEnter2 = () => setMessage2('안녕하세요3!');
    const onClickLeave2 = () => setMessage2('안녕히 가세요3!');
    
    const [color, setColor] = useState('black');
    return (
        <div>
            
            <button onClick = {onClickEnter2}> 로그인3 </button>
            <button onClick = {onClickLeave2}> 로그아웃3 </button>
            <h1 style = { { color }}> { message2 } </h1>
            {/* 1. 이벤트 이름은 카멜 표기법으로 작성  onClick */}
            <button style = {{ color : 'red'}} onClick = { () => setColor('red')}>  {/*2. 이벤트에는 함수 형태의 객체를 전달 */}
                빨간색
            </button>
            <button style ={{ color : 'green'}} onClick = { () => setColor('green')}>
                초록색
            </button>
            <button style = {{ color : 'blue'}} onClick = { () => setColor('blue')}>
                파란색
            </button>
            {/*DOM 요소에만 이벤트 설정 가능 
                직접만든 컴포넌트에는 이벤트를 자체적으로 설정 불가 */}
            
        </div>
    );
};
export default Say3;