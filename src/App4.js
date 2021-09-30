import React,{Fragment} from 'react';


function App4() {
  const name = 'App4';
  return (
    <>
      <div 
        style = {{
          backgroundColor: 'red',
          color: 'yellow',
          fontSize: '48px',
          fontWeight: 'bold',
          padding: 16
        }}
      >
        {name}
      </div>
    </>
  )
}

export default App4;
