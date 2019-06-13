import React from 'react';
import {ToolsWrapper,BackToTop,ShareArticle} from './style';


export default class SideTools extends React.Component{
    render(){
        return (
            <ToolsWrapper>
                <BackToTop>
                    <i className="iconfont">&#xe606;</i>
                </BackToTop>
                <ShareArticle>
                    <i className="iconfont">&#xe64c;</i>
                </ShareArticle>
            </ToolsWrapper>
        )
    }
}