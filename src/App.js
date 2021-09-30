import React,{Fragment} from 'react';


function App() {
  const name = 'App'
  return (
    <>
      {name === 'App' ?(
        <h1>{name}가 맞습니다.</h1>
      ):(
        <h2>{name}가 아닙니다.</h2>
      )}
      
      
    </>
        
    
  );
}

export default App;
