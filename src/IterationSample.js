import React from 'react';

const IterationSample = () => {
    const names = ['눈사람' , '얼음' , '눈', '바람 '];
    const nameList = names.map( name => <li>{name} </li>);
    return <ul> 
           <div>데이터 배열을 컴포넌트 배열로 변환</div>
                {nameList} 
            </ul>;

};
export default IterationSample;