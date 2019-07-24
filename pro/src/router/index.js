import Vue from 'vue'
import Router from 'vue-router'

import find from '../views/find'
// import tourism from "../components/tourism" //旅游攻略
// import travel from "../components/travel"  //出行专题
// import house from "../components/house"  //房东故事
// import comment from "../components/comment"  //热门评论

import details from '../views/details'  //旅游攻略 房东故事详情
import share from "../views/share"  //分享页面
import selectpage from "../views/selectpage"  //搜索页面
import cityhotellist from "../views/cityhotellist"  //城市酒店页
import hoteldetails from "../views/hoteldetails"  //引入酒店详情页
import hotelbook from "../components/hotelbook" //引入酒店详情页 酒店信息组件
import usercomment from "../components/usercomment" //引入酒店详情页 住客评价组件

import bookpay from "../views/bookpay"  //订单支付页
import paysuccess from "../views/paysuccess"  //支付成功订单查看页
import apitest from "../views/apitest"  //接口测试页
import axiostest from "../views/axiostest"  //测试局部刷新


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/find'
    // },
    {
      path: '/find',
      component: find,
    },
    {
      path: '/details/:from/:id',
      component: details,
    },
    {
      path: "/share",
      component: share
    },
    {
      path: '/select',
      component: selectpage
    },
    {
      path: '/cityhotellist',
      component: cityhotellist
    },
    {
      path: '/api',
      component: apitest
    },
    {
      path: '/axios',
      component: axiostest
    },
    {
      path: '/hoteldetails/:id',
      component: hoteldetails,
      children: [
        {
          path: '/hotelbook/:id',
          name: hotelbook,
          component: hotelbook
        },
        {
          path: '/usercomment',
          name: "usercomment",
          component: usercomment
        }
      ]
    },
    {
      path: '/bookpay',
      component: bookpay
    },
    {
      path: "/paysuccess",
      component: paysuccess
    }
  ]
})
