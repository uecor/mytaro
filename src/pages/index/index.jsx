import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { AtButton } from 'taro-ui'

import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页--'
  }



  render () {
    return (
      <View className='index'>
        <AtButton type="primary" className="add_btn" onClick={this.props.add}>+</AtButton>
        <Text>Hello world!</Text>
      </View>
     
    )
  }
}
