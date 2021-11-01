import React, { useState } from 'react';

const IterationSample3 = () => {
    //1. 데이터 배열상태 저장 
    const [ names, setNames ] = useState([
        {id: 1, text: '맥과이어'},
        {id: 2, text: '바란'},
        {id: 3, text: '포그바'},
        {id: 4, text: '데헤아'}
    ]);
    //2. 텍스트를 입력할 수 있는 input의 상태 
    const [inputText, setInputText] = useState('');
    
    //3. 데이터 배열에서 새로운 항목을 추가할 때 사용할 고유 id를 위한 상태 
    const [nextId, setNextId] = useState('');

    const onChange = e => setInputText(e.target.value);

    
    // onClick 함수에는 배열의 내장함수 concat를 사용해 새로운 항목을 추가한 배열 만들고
    // push 함수는 기존 배열 자체를 변경해주는 반면 concat은 새로운 배열을 만들어준다 
    // React에서는 사ㅇ태를 업데이트 할 때 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야 합니다 - 불변성 유지 
    // 불변성 유지를 해야 나중에 리엑트 컴포너느의 성능을 최적화 가능 
    // -> setNames를 통해 상태 업데이트 
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,  //nextId 값을 id로 설정
            text: inputText
        });
        setNames(nextNames);
        setNextId(nextId+1); //names 값을 업데이트
        setInputText(''); //inputText 를 비워 
        
    };

    // map함수를 사용할떄 key값을 index 대신 name.id 값으로 지정 
    const namesList = names.map( name => <li key = {name.id}> {name.text} </li>);
    
    return(
     <>
      <input value = {inputText} onChange = {onChange} />
      <button onClick ={onClick}> 추가 </button>
      <ul>{namesList}</ul>
     </>
    ) 
     
};
export default IterationSample3;