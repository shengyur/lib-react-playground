import { INPUT_FOCUSED, INPUT_NOT_FOCUSED } from "./actionTypes";

export const handleFocusAction = ()=>({
    type:INPUT_FOCUSED
})

export const handleBlurAction = ()=>({
    type:INPUT_NOT_FOCUSED
})