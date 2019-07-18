import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

//改成immutable类型的数据
const defaultState = fromJS({
  title:"如果有一天你难过到极点，就点进来看看，总有一个方法适合你",
  content:  '<p>人的感情，真的是这个是世界上最复杂的东西，我们好像花了很多力气，也逃不掉感情的控制。有时候，我们真的会很难过，很难过，因为爱情，又或者因为生活。我们总是害怕受伤，害怕别离，总是有一瞬间，特别想哭。</p><img alt=""  src="https://upload-images.jianshu.io/upload_images/10121288-8f677bb4972da5e0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp"/><p>曾经在晚上车水马龙的街道，看到一个女生，双腿抱膝，独自一人在角落里，放声大哭。我很想上前问问她为什么这么难过。可是我终究什么也没有说，毕竟我们都有过伤心的时候，也很明了难过的时候，我们总是想一个人的。</p><p>今天在这里呢，我想告诉很多人，这个世界上值得你伤心的人有很多，可是不值得你难过的也有很多。当我们难过的时候，不妨抬头望望天，不要让眼泪掉下来，或许，我们可以骗自己，没有那么脆弱。</p><p>可是，只有自己有没有难过，自己才知道。今天给大家推荐一些可以不难过的方法，希望对大家有那么一些参考价值。</p>'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
