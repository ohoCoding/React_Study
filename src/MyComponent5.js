import React from 'react';
import PropTypes from 'prop-types';

const MyComponent5 = ({ name, favoriteNumber, children }) => {
    return (
        <div>
            안녕하세요 MyComponent5의 이름은 { name } 입니다.<br/>
            MyComponent5의 children의 값은 {children} 입니다.<br/>
            MyComponent5가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    );
};

MyComponent5.defaultProps = {
    name: '호날두'
};

MyComponent5.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent5;