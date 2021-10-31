import React from 'react';

const IterationSample2 = () =>{
    const names = [ '물', '탄수화물' , '단백질', '지방'];
    const namesList = names.map(( name , index ) => <li key = {index}> {name} </li>);
    return <ul>{namesList}</ul>
};

export default IterationSample2;