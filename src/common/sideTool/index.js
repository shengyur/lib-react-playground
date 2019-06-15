import React from 'react';
import {ToolsWrapper,BackToTop,ShareArticle} from './style';
import { connect } from 'react-redux';
import * as actionCreaters from './store/actionCreates';

let backToTop = function (rate) {
    let doc = document.body.scrollTop? document.body : document.documentElement;
    let scrollTop = doc.scrollTop;
    
    let top = function () {
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

class SideTools extends React.PureComponent{

    componentDidMount(){
        this.bindScroll();
    }

    bindScroll(){
        window.addEventListener("scroll",()=>{
            this.props.changeScrollShow();
        })
    }

    handleScrollTop(){
        // 滚动到顶部缓动实现,rate表示缓动速率，默认是2
        backToTop(4)
    }

    render(){
        return (
            <ToolsWrapper>
                {
                    this.props.showScroll ? 
                    <BackToTop onClick={this.handleScrollTop}>
                        <i className="iconfont">&#xe606;</i>
                    </BackToTop>
                    :""
                }
                <ShareArticle>
                    <i className="iconfont">&#xe64c;</i>
                </ShareArticle>
            </ToolsWrapper>
        )
    }
};

const mapStateToProps = (state)=>({
    showScroll:state.get("showScroll").get("showScrollToTop")
})

const mapDispatchToProps = (dispatch)=>{
    return {
        changeScrollShow(){
            let scrollTopLength = document.documentElement.scrollTop;
            if(scrollTopLength > 400){
                const action = actionCreaters.handlePageScroll(true)
                dispatch(action)
            }else{
                const action = actionCreaters.handlePageScroll(false)
                dispatch(action)
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideTools);