import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Order from '@/views/Order'
import Vant from 'vant'
import OrderList from  '@/views/OrderList'
import ToBePay from  '@/views/ToBePay'
import Comment from  '@/views/Comment'
import WriteComment from  '@/views/WriteComment'
import OwnPage from  '@/views/OwnPage'
import Setting from  '@/views/Setting'

import PersonalData from  '@/views/PersonalData'
import AddressList from  '@/views/AddressList'
import AddAddress from  '@/views/AddAddress'

import 'vant/lib/index.css'

Vue.use(Vant);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:"/order"
    },
    {
    	path:'/order',
    	component:Order,
    },{
    	path:"/tobepay",
    	component:ToBePay
    },{
    	path:"/comment",
    	component:Comment
    },{
    	path:"/writecomment",
    	component:WriteComment
    },{
    	path:"/ownpage",
    	component:OwnPage
    },{
      path:"/setting",
      component:Setting
    },{
      path:"/personaldata",
      component:PersonalData
    },{
      path:"/addresslist",
      component:AddressList
    },{
      path:"/addaddress",
      component:AddAddress
    }

  ]
})
