import { fromJS } from "immutable";

//改成immutable类型的数据
const defaultState = fromJS({
  list: [
    {
      id: 1,
      title: "包大人府上欢乐多",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/13889945-a73e083fe3096589?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      content:
        "1、熊猫说：“我的梦想是有生之年能拍一张彩色照片。”包拯叹了口气：“你真贪心。我只希望能拍一张黑白照片。”公孙策安慰道：“大人切莫妄自菲薄，您随..."
    },
    {
      id: 2,
      title: "做早起精细化时间记录，精确到分钟",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/12759292-6c73670f4b7adde2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      content:
        "为什么要优化早起准备时间？ 1、为了确保早起不赖床，晚上提前准备好衣物才睡觉是可行的，并且让自己有了新的目标，就是争取在5点半前完成..."
    },
    {
      id: 3,
      title: "为何冒着危险走亲戚，我不懂",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/16235793-bfc6f764baae2723.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      content:
        "昨天，河南老家下了大雪。持续低温，今天一天都没有化冻。 路上很滑，这给走亲戚拜朋友带来了麻烦。尤其现在，都是开车或者骑电瓶车出行，一旦发生意外，..."
    },
    {
      id: 4,
      title: "成年人的字写的丑，如何练习？",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/8107105-351ef8fba211afe8.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      content:
        "常言道：字如其人。我以为，能写一手漂亮的钢笔字，真是非常体面的一件事情。比如，去银行柜台办业务，签名写得很好看，柜员小姐姐立马对你另眼相看，还会..."
    },
    {
      id: 5,
      title: "我只是每周坚持定存了20块钱而已",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/16277207-7687e0330851380d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      content:
        "大概是去年发现了投资理财力量的强大。于是，我付费去学习了。然后，听了大概有两三个月的课程，课程教了很多，有基金，股票还有保险。 一开始的训练营，..."
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
