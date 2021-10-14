import React ,{ Component } from 'react';

class EventPractice5 extends Component {
    state = { 
        message: ''
    }
    //임의 메서드가 이벤트로 등록되어도 
    //this를 컴포넌트 자신으로 제대로 가리키기 위해서 메서드를 this와 바인딩해야 한다
    //
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }
    handleClick(e) {
        alert( this.state.message);
        this.setState({
            message: ''
        });
    }

    render(){
        return(
            <div>
                <h1> 이벤트 처리 할 떄 </h1>
                <div> 함수를 미리 준비해 렌더링 하는 동시에 전달 </div>
                <input 
                    type = "text"
                    name = "message"
                    placeholder = "아무거나 입력해보세요~"
                    value = {this.state.message}
                    onChange = {this.handleChange}
                />
                <button onClick = {this.handleClick}>확인</button>
            </div>
        );
    }
}
export default EventPractice5;