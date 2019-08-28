// refs获取组件实例
import React, { Component } from 'react';

const refHoc = WrappedComponent => {
    return class extends Component {
        componentDidMount() {
            console.log("instance", this.instanceComponent);
        }


        render() {
            return (<WrappedComponent
                {...this.props}
                ref={instance => this.instanceComponent = instance}
            />)
        }
    }
}

export default refHoc;