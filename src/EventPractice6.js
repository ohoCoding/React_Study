import React , { Component } from 'react';

class EventPractice6 extends Component {
    state = {
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = (e) => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return(
            <div>
                <h1>메서드 바인딩 없이 property initializer syntax를 사용한 메서드 작성</h1>
                <input 
                    type = "text"
                    name = "message"
                    placeholder = "아무거나 입력해보세요~"
                    value = {this.state.message}
                    onChange = {this.handleChange}
                />
                <button onClick = {this.handleClick}>확인</button>
            </div>
        )
    }
}
export default EventPractice6;