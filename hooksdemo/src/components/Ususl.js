import React, { Component } from 'react';
import simpleHoc from '../Hoc/simpleHoc'

@simpleHoc
class Usual extends Component {
    render() {
        console.log(this.props, 'props');
        return (
            <div>
                Usual
            </div>
        )
    }
}

export default Usual;

