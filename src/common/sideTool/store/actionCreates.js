import * as actionTypes from "./actionTypes";
import axios from 'axios';
import {fromJS} from 'immutable';


export const  handlePageScroll= (showScroll)=>({
    type:actionTypes.PAGE_SCROLL,
    showScroll:showScroll
})
