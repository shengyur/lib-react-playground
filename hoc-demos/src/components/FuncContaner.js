import React, { Component } from 'react';
import StyleContainer from './StyleContainer';

//外层 FuncContainer 必须要引入内层Container,进行包装，还有props传递
class FuncContainer extends Component {
    handleClick() {
        console.log('click');
    }

    render() {
        const props = {
            ...this.props,
            handleClick: this.handleClick
        };

        return (<StyleContainer {...props} />);
    }
}

export default FuncContainer;
