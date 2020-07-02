import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
import { Provider } from "@tarojs/redux";
import dva from './utils/dva'
import models from './models';

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();   //  getStore是一个函数！！！要执行！！！

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/topic/topic',
      'pages/catalog/catalog',
      'pages/cart/cart',
      'pages/ucenter/index/index',
      'pages/search/search',
      'pages/category/category',
      'pages/goods/goods',
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '网易严选',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: true
    },
    tabBar: {
      backgroundColor: '#fafafa',
      borderStyle: 'white',
      selectedColor: '#b4282d',
      color: '#666',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: 'static/images/ic_menu_choice_nor.png',
          selectedIconPath: 'static/images/ic_menu_choice_pressed.png',
          text: '首页'
        },
        {
          pagePath: 'pages/topic/topic',
          iconPath: 'static/images/ic_menu_topic_nor.png',
          selectedIconPath: 'static/images/ic_menu_topic_pressed.png',
          text: '专题'
        },
        {
          pagePath: 'pages/catalog/catalog',
          iconPath: 'static/images/ic_menu_sort_nor.png',
          selectedIconPath: 'static/images/ic_menu_sort_pressed.png',
          text: '分类',
        },
        {
          pagePath: 'pages/cart/cart',
          iconPath: 'static/images/ic_menu_shoping_nor.png',
          selectedIconPath: 'static/images/ic_menu_shoping_pressed.png',
          text: '购物车'
        },
        {
          pagePath: 'pages/ucenter/index/index',
          iconPath: 'static/images/ic_menu_me_nor.png',
          selectedIconPath: 'static/images/ic_menu_me_pressed.png',
          text: '我的'
        }
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
