import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeHomeData = (data)=>({
    type:actionTypes.getHomeData,
    homeList:data.data.homeList,
    recommentList:data.data.recommentList,
    recommentWriterList:data.data.recommentWriterList
})

const getMoreInfo = (data)=>({
    type:actionTypes.loadMoreList,
    morelist:data.data.morelist
})

export const getHomeInfo = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const data = res.data;
            dispatch(changeHomeData(data));
        })
    }
}

export const loadMoreInfo = ()=>{
    return (dispatch)=>{
        axios.get('/api/loadmore.json').then((res)=>{
            const data = res.data;
            console.log(data)
            dispatch(getMoreInfo(data));
        })
    }
}