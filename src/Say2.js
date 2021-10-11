import React, { useState } from 'react';

const Say2 = () => {
    const [ message2, setMessage2 ] = useState('안녕 초기값');
    const onClickEnter2 = () => setMessage2('안녕하세요2!');
    const onClickLeave2 = () => setMessage2('안녕히 가세요2!');
    
    const [color, setColor] = useState('black');
    return (
        <div>
            <button onClick = {onClickEnter2}> 로그인 </button>
            <button onClick = {onClickLeave2}> 로그아웃 </button>
            <h1 style = { { color }}> { message2 } </h1>
            <button style = {{ color : 'red'}} onClick = { () => setColor('red')}>
                빨간색
            </button>
            <button style ={{ color : 'green'}} onClick = { () => setColor('green')}>
                초록색
            </button>
            <button style = {{ color : 'blue'}} onClick = { () => setColor('blue')}>
                파란색
            </button>
        </div>
    );
};
export default Say2;