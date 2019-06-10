import axios from 'axios';

export const getHomeInfo = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const data = res.data;
            const action = {
                type:"get_home_data",
                homeList:data.data.homeList,
                recommentList:data.data.recommentList,
                recommentWriterList:data.data.recommentWriterList
            }
            dispatch(action);
        })
    }
}