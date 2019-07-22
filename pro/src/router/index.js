import Vue from 'vue'
import Router from 'vue-router'
// 头部搜索
import indexSearch from './wangna-router/indexSearch'
// 推荐页面
import Recommend from './wangna-router/Recommend'
// 房源详情页面
import Listingdetail from './wangna-router/Listingdtail'
// 探索体验页面
import Exploringexperience from './wangna-router/Exploringexperience'
import index from '../views/index'
// 旅行故事详情
import Travelstory from './wangna-router/Travelstory'
//搜索结果页面
import SearchEnd from './wangna-router/SearchEnd'
// 体验详情页面
import Experiencedetails from './wangna-router/Experiencedetails'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Recommend,
      name:'Recommend',
      redirect:'/index'
    },{
      path:'/index',
      component:index,
      redirect:'/Recommend',
      children:[
        {
          path: '/Recommend',
           name: 'Recommed',
            component: Recommend
        },
        {
          path: '/Exploringexperience',
          name: 'Exploringexperience',
          component: Exploringexperience
        },
        {
          path: '/Travelstory',
          name: 'Travelstory',
          component: Travelstory
        }
      ]
    }, {
      path: '/Listingdetail',
      name: 'Listingdetail',
      component: Listingdetail
    },
    {
      path:"/indexSearch",
      name:'indexSearch',
      component:indexSearch
    },
    {
      path:'/SearchEnd',
      name:'SearchEnd',
      component:SearchEnd
    },
    {
      path:'/Experiencedetails',
      name:'Experiencedetails',
      component:Experiencedetails
    }

  ]
})
