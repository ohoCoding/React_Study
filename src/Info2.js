import React, {useState, useEffect } from 'react';

const Info2 = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log("렌더링이 완료되었습니다!");
        console.log({
            name,
            nickname,
        });
    });
    //마운트 될때만 실행
    useEffect(() => {
        console.log("마운트 될때만 실행");
    },[]);

    //특정값이 업데이트 될때만 실행
    useEffect(() => {
        console.log(name);
    },[name]);
    
    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return(
        <div>
            <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickname} onChange={onChangeNickName}/>
        </div>
        <div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
        </div>
    );
};

export default Info2;