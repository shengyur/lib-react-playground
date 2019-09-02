import React, { Component } from 'react';
// import simpleHoc from '../Hoc/simpleHoc';
// import propsProxyHoc from '../Hoc/propsProxyHoc';
// import refHoc from '../Hoc/refHoc';
// import iiHoc from '../Hoc/inheritanceInversion';
import hijackRenderHoc from '../Hoc/hijack';


@hijackRenderHoc({ type: "add-style", style: { color: "red" } })
class Usual extends Component {
    constructor() {
        super();
        this.state = {
            usual: 'USUAL'
        }
    }

    componentDidMount() {
        console.log("usual did mount");
    }

    render() {
        console.log(this.props, 'props');

        return (
            <div style={{ width: "100px", height: "100px", border: "1px solid red" }}>
                Usual save
            </div>
        )
    }
}

// const compose = (...funcs) => component => {
//     if (funcs.length === 0) {
//         return component;
//     }
//     const last = funcs[funcs.length - 1];
//     // arr.reduceRight(callback[, initialValue])
//     // initialValue: 可作为第一次调用回调 callback 的第一个参数
//     // callback(
//     // 上一次调用的返回值或提供的initialValue,
//     // 当前被处理的元素，
//     // 当前处理元素的索引，
//     // 调用reduce的数组
//     // )
//     return funcs.reduceRight((res, cur) => cur(res), last(component));
// }

// const WrappedComponent = compose(addFuncHOC, addStyleHOC)(Usual);


export default Usual;

