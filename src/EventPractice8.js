import React, { Component } from 'react';

class EventPractice8 extends Component {
    state = {
        username: '',
        messagge: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.username + ':' + this.state.messagge);
        this.setState({
            username: '',
            messagge: ''
        });
    }
    handleKeyPass = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>onKeyPress 이벤트 핸들링 </h1>
                <input 
                type = "text"
                name = "username"
                placeholder ="사용자명"
                value ={this.state.username}
                onChange = { this.handleChange}
                />
                <input
                type = "text"
                name = "message"
                placeholder = "메시지를 입력하세요"
                value = {this.state.message}
                onChange = {this.handleChange}
                onKeyPress = { this.handleKeyPass}
                />
                <button onClick = {this.handleClick}>확인</button>
            </div>
        )
    }
}
export default EventPractice8;