import styled from 'styled-components';

export const ToolsWrapper = styled.ul`
    cursor:pointer;
    position:fixed;
    right:40px;
    z-index:1000;
    bottom:50px;
    width:50px;
    border:1px solid #dcdcdc;
    li{
        display:block;
        width:50px;
        height:50px;
        margin:0 auto;
        line-height:50px;
        text-align:center;
        i{
            display:inline-block;
        }
    }
`



export const BackToTop = styled.li`
    border-bottom:1px solid #dcdcdc;
`


export const ShareArticle = styled.li``