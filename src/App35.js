import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
    return '#'+ Math.floor(Math.random() * 16777215).toString(16);

}

class App35 extends Component {
    state = {
        color: 'red'
    }
    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }
    render(){
        return(
            <div>
                <button onClick = { this.handleClick } >랜덤 색상</button>
                <LifeCycleSample color = {this.state.color} />
            </div>
        );
    }
}
export default App35;