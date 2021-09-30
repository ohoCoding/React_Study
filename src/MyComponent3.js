import React from 'react';

const MyComponent3 = props => {
    return (
        <div>
             MyComponent3의 이름은 {props.name}입니다.<br/>
            children 값은 {props.children} 입니다.
        </div>
    );
};

export default MyComponent3;