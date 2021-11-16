import React,{useState} from 'react';
import Info3 from './Info3';

const App40 =() => {
    const [visible, setVisible] = useState(false);
    return(
        <div>
            <button onClick={() => {
                setVisible(!visible);
            }}
            >
                {visible?'숨기기':'보이기'}
            </button>
            <hr/>
            {visible&& <Info3/>}
        </div>
        

    )
};

export default App40;