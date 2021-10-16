import React, { Component } from 'react';

class EventPractice7 extends Component {

    state =  {
        username : '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    render() {
        return(
            <div>
                <h1>input 여러개 다루기 연습</h1>
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
                />
                <button onClick = {this.handleClick}>확인</button>
            </div>
        );
    }
}
export default EventPractice7;