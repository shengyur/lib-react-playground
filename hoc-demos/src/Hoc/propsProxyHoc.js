import React, { Component } from 'react';

const propsProxyHoc = WrappedComponent => {
    return class extends Component {

        handleClick() {
            console.log("click me");
        }

        render() {
            return (
                <WrappedComponent
                    // {...this.props} 
                    withHandleClick={() => this.handleClick} />
            )
        }
    }
}

export default propsProxyHoc;