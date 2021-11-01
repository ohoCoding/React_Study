import React from 'react';

const IterationSample2 = () =>{
    const names = [ '물', '탄수화물' , '단백질', '지방'];
    const namesList = names.map(( name , index ) => <li key = {index}> {name} </li>);
    // key는 컴포넌트 배열을 렌더링했을때 어떤 원소에 변동이 있었는지 사용 
    // key값 설정할때 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 porps를 설정하듯이 설정하면됨 
    // key값은 언제나 유일해야 함 
    return <ul>{namesList}</ul>
};

export default IterationSample2;