import React from 'react';
import MyComponent3 from './MyComponent3';

const App7 = () => {
    return <MyComponent3 name="App7">App7의 children</MyComponent3>
    //MyComponent3 내부에 있는 값은 props로 바로 전달 
    //MyComponent3 사이에 있는 값은 props.children으로 전달
};

export default App7;