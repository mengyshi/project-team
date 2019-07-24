
import Vue from 'vue'
import Router from 'vue-router'

import find from '../views/find'

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



// 头部搜索
import indexSearch from "./wangna-router/indexSearch";
// 推荐页面
import Recommend from "./wangna-router/Recommend";
// 房源详情页面
import Listingdetail from "./wangna-router/Listingdtail";
// 探索体验页面
import Exploringexperience from "./wangna-router/Exploringexperience";
// import index from "../views/index";
// 旅行故事详情
import Travelstory from "./wangna-router/Travelstory";
//搜索结果页面
import SearchEnd from "./wangna-router/SearchEnd";
// 体验详情页面
import Experiencedetails from "./wangna-router/Experiencedetails";

import HelloWorld from "@/components/HelloWorld";
import Order from "@/views/Order";
import Vant from "vant";
import OrderList from "@/views/OrderList";
import ToBePay from "@/views/ToBePay";
import Comment from "@/views/Comment";
import WriteComment from "@/views/WriteComment";
import OwnPage from "@/views/OwnPage";
import Setting from "@/views/Setting";
import PersonalData from "@/views/PersonalData";
import AddressList from "@/views/AddressList";
import AddAddress from "@/views/AddAddress";
import EditAddress from "@/views/EditAddress";
import Collect from "@/views/Collect";
import UpdateInfo from "@/views/UpdateInfo";
// 更改个人信息组件
import Username from "@/views/personalInfo/Username";
import TelPhone from "@/views/personalInfo/TelPhone";
import Mail from "@/views/personalInfo/Mail";
import Sex from "@/views/personalInfo/Sex";
import IdCard from "@/views/personalInfo/IdCard";
import City from "@/views/personalInfo/City";
import Birthday from "@/views/personalInfo/Birthday";
import Hometown from "@/views/personalInfo/Hometown";


import "vant/lib/index.css";

import Uploderimg from "@/views/UplodeImg"

import "vant/lib/index.css";

import LoginC from "@/views/LoginC.vue";
import LoginP from "@/views/LoginP.vue";
import Register from "@/views/Register.vue";
import index from "@/views/index"
import TripStory from "@/views/TripStory.vue";
import StoryDetail from "@/views/StoryDetail.vue";
import UpdatePwd from "@/views/UpdatePwd";
Vue.use(Vant);
Vue.use(Router);

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/find'
    // },

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

      path: "/",
      component: Recommend,
      name: "Recommend",
      redirect: "/index",
    },
    {
      path: "/index",
      component: index,
      redirect: "/Recommend",
      children: [
        {
          path: "/Recommend",
          name: "Recommed",
          component: Recommend,
        },
        {
          path: "/order",
          component: Order,
        },
        {
          path: "/ownpage",
          component: OwnPage,
        },
        {
          path: "/Exploringexperience",
          name: "Exploringexperience",
          component: Exploringexperience,
        },
        {
          path: "/Travelstory",
          name: "Travelstory",
          component: Travelstory,
        },
        {
          path: '/find',
          component: find,
        },
      ],
    },
    {
      path: "/Listingdetail",
      name: "Listingdetail",
      component: Listingdetail,
    },
    {
      path: "/indexSearch",
      name: "indexSearch",
      component: indexSearch,
    },
    {
      path: "/SearchEnd",
      name: "SearchEnd",
      component: SearchEnd,
    },
    {
      path: "/Experiencedetails",
      name: "Experiencedetails",
      component: Experiencedetails,
    },
    ,
    {
      path: "/tobepay",
      component: ToBePay,
    },
    {
      path: "/comment",
      component: Comment,
    },
    {
      path: "/writecomment",
      component: WriteComment,
    },
    {
      path: "/setting",
      component: Setting,
    },
    {
      path: "/personaldata",
      component: PersonalData,
    },
    {
      path: "/addresslist",
      component: AddressList,
    },
    {
      path: "/addaddress",
      component: AddAddress,
    },
    {
      path: "/editaddress",
      component: EditAddress,
    },
    {
      path: "/collect",
      component: Collect,
    },
    {
      path: "/updateinfo",
      component: UpdateInfo,
      children: [
        {
          path: "/username",
          component: Username,
        },
        {
          path: "/telphone",
          component: TelPhone,
        },
        {
          path: "/hometown",
          component: Hometown,
        },
        {
          path: "/sex",
          component: Sex,
        },
        {
          path: "/city",
          component: City,
        },
        {
          path: "/birthday",
          component: Birthday,
        },
        {
          path: "/mail",
          component: Mail,
        },
      ],
    },
    {
      path: "/loginC",
      component: LoginC,
    },
    {
      path: "/loginP",
      component: LoginP,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/trip",
      component: TripStory,
    },
    {

      path: "/uploderimg",
      component: Uploderimg
    }, {

      path: "/detail",
      component: StoryDetail,
    },
    {
      path: "/update",
      component: UpdatePwd,
    }, {
      path: "/paysuccess",
      component: paysuccess
    }

  ]
});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === "/loginC") {
    next();
  } else {
    let token = localStorage.getItem("Authorization");

    if (token === "null" || token === "") {
      next("/loginC");
    } else {
      next();
    }
  }
});

export default router;
