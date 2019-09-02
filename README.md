## 包含hooks:
- useState
- useEffect
- useContext
- useReducer
- useCallback
- useMemo
- useRef
- useLayoutEffect
- useXxxxx 自定义钩子

## hoc 高阶组件
### 用法：
- 属性代理
    - 操作 props
    - refs 获取组件实例
    - 抽离 state
- 反向继承
    - 渲染劫持

### 使用场景：
- 已有老页面的页面级组件中，自身耦合很多，类似逻辑也很多，当两个页面都需要加一段一样的逻辑时，可以写一个HOC，包裹两个组件，使用属性代理。
这样新的代码就不会再出现耦合，旧的逻辑也不会改变。（愿意的话也可以往HOC中抽离一部分老的逻辑
- 已有功能完成的组件A，产品加了新需求让做个B，功能基本与A一模一样，但稍微有点区别。那么就可以使用B组件去继承A组件，然后做

## 拓展阅读:
1. PureComponent 和 memo是怎么进行比较的？只是单纯的全等吗？
- https://www.imweb.io/topic/598973c2c72aa8db35d2e291
- https://github.com/AnHongpeng/blog/issues/5
- https://juejin.im/post/5c765500f265da2d9809106a

2. 装饰器(Decorator)在React中的应用
- https://segmentfault.com/a/1190000010869171
- https://xwjgo.github.io/2017/11/09/%E8%A3%85%E9%A5%B0%E5%99%A8%E5%92%8CHOC/

3. Redux 中的compose实现原理
```javascript
const compose = (...funcs) => component => {
    if (funcs.length === 0) {
        return component;
    }
    const last = funcs[funcs.length - 1];
    // arr.reduceRight(callback[, initialValue])
    // initialValue: 可作为第一次调用回调 callback 的第一个参数
    // callback(
    // 上一次调用的返回值或提供的initialValue,
    // 当前被处理的元素，
    // 当前处理元素的索引，
    // 调用reduce的数组
    // )
    return funcs.reduceRight((res, cur) => cur(res), last(component));
}
```

## 参考：
高阶组件：https://github.com/sunyongjian/blog/issues/25