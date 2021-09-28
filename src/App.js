import React,{Fragment} from 'react';


function App() {
  const name = '축구'
  return (
    <>
      {name === '축구' ?(
        <h1>{name}가 맞습니다.</h1>
      ):(
        <h2>{name}가 아닙니다.</h2>
      )}
      
      
    </>
        
    
  );
}

export default App;
