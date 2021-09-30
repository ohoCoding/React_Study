import React from 'react';
import PropTypes from 'prop-types';

const MyComponent4  = ({name,children}) => {
    return (
        <div>
            안녕하세요, MyComponent4 {name} 입니다 
            MyComponent4의 childern 값은 {children} 입니다
        </div>
    );
};
MyComponent4.propTypes = {
    name : PropTypes.string
};

export default MyComponent4;