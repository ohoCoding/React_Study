import React, { Component } from 'react';
import LifeCycleSample2 from './LifeCycleSample2';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
    return '#'+ Math.floor(Math.random() * 16777215).toString(16);

}

class App36 extends Component {
    state = {
        color: 'red'
    }
    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    };
    render(){
        return(
            <div>
                <button onClick = { this.handleClick } >랜덤 색상</button>
                <ErrorBoundary>
                <LifeCycleSample2 color = {this.state.color} />
                </ErrorBoundary>
            </div>
        );
    }
}
export default App36;
