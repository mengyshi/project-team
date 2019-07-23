旅行故事接口文档：

1.展示所有旅行老故事信息 get 接口：http://10.8.157.43:8080//travelLog/list.do

{
"code": 1,
"info": {
"id": 1, **# 旅行故事 id ，整型**
"address": "大理白族自治州", **#旅行地点 ，字符串**
"comment": "远离双十一的喧嚣，在洱海旁，在雪山上，享受难得的安宁，史蒂芬霍金谁都会放假撒地方撒胡椒粉和康师傅看见爱上发挥了粉红色，防守打法开物而房价数据开放环保科技撒防守打法，撒地方环境撒话费卡是哇静安寺副驾驶，是否健。", **#旅行故事内容，字符串**
"likenum": 1000, **#点赞数量**，**整型**
"collectnum": null, **#收藏数量**，**整型**
"overview": "盼望着，盼望着，东风来了，春天的脚步近了.......", **#旅行故事概述，字符串**
"user": null, **#用户头像， 字符串** （data.info.tra）
"imgpath": "http://cdn2.tmmtours.cn/201907151520/picture/o1cn013tuqrm1eqdgxj5uh1_!!2270913865.jpg" **#旅行采风图片地址,字符串**
}
}

2.展示某个地点的旅行故事信息：get 接口： http://10.8.157.43/travelLog:8080//findById.do?id=1 （此处需要前端传递一个 id 值,我先写死）

**该数据库字段与上面相同**
{
"id": 1,
"address": "大理白族自治州",
"comment": "远离双十一的喧嚣，在洱海旁，在雪山上，享受难得的安宁",
"num": 1000,
"user": null,
"imgpath": "http://cdn2.tmmtours.cn/201907151520/picture/o1cn013tuqrm1eqdgxj5uh1_!!2270913865.jpg"
}

3.点赞：post 接口：http://10.8.157.43/like/add.do?uid=2&tid=2 （此处需要传给后台两个参数，uid：点赞的用户 id，tid：被点赞的旅行故事的 id，此处暂时写死）

点赞数据库字段（多对多关系）

![1563715260007](C:\Users\small\AppData\Local\Temp\1563715260007.png)

![1563716835107](C:\Users\small\AppData\Local\Temp\1563716835107.png)

以上接口为静态不会变化的接口，你可以测试一下好用不好用，上面的截图为 swagger 测试数据，要是 postman 不好用，可以用此链接试试：<http://10.8.157.43:8080/swagger-ui.html>
