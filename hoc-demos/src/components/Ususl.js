import React, { Component } from 'react';
import simpleHoc from '../Hoc/simpleHoc';
import propsProxyHoc from '../Hoc/propsProxyHoc';
import refHoc from '../Hoc/refHoc';


@refHoc
class Usual extends Component {
    render() {
        console.log(this.props, 'props');

        return (
            <div style={{ width: "100px", height: "100px", border: "1px solid red" }}>
                Usual save
            </div>
        )
    }
}

export default Usual;

