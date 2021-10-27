import React, {Component} from 'react';
import ScrollBox2 from './ScrollBox2';


class App30 extends Component {
    render() {
        return(
            <div>
                <ScrollBox2 ref = {(ref) => this.ScrollBox2 = ref} />
                <button onClick = { () => this.ScrollBox2.scrollToBottom()}>
                    맨 밑으로~
                </button>
            </div>

        );
     
    }
    
}
export default App30;