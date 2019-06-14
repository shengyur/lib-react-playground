import React from 'react';
import {ToolsWrapper,BackToTop,ShareArticle} from './style';

var backToTop = function (rate) {
    var doc = document.body.scrollTop? document.body : document.documentElement;
    var scrollTop = doc.scrollTop;
    
    var top = function () {
        scrollTop = scrollTop + (0 - scrollTop) / (rate || 2);
        
        // 临界判断，终止动画
        if (scrollTop < 1) {
            doc.scrollTop = 0;
            return;
        }
        doc.scrollTop = scrollTop;
        // 动画
        requestAnimationFrame(top);    
    };
    top();
};

export default class SideTools extends React.Component{

    componentDidMount(){
        window.addEventListener('scroll', function(e) {
            // console.log(document.documentElement.scrollTop)
        })
    }

    handleScrollTop(){
        // 滚动到顶部缓动实现
        // rate表示缓动速率，默认是2
        backToTop(4)
    }

    render(){
        return (
            <ToolsWrapper>
                <BackToTop onClick={this.handleScrollTop}>
                <i className="iconfont">&#xe606;</i>
                </BackToTop>
                <ShareArticle>
                    <i className="iconfont">&#xe64c;</i>
                </ShareArticle>
            </ToolsWrapper>
        )
    }
}