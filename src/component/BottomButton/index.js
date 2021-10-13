/*
 * @Author: heyuting009
 * @Date: 2021-09-22 18:37:36
 * @LastEditTime: 2021-10-11 16:39:57
 * @LastEditors: heyuting009
 * @Description: 类组件
 */
import {Button} from 'antd-mobile'
import React from 'react'
import './style.css'

export default class BottomButton extends React.Component{
  constructor(props){
    super(props)
    // super()
    this.state={
      key:'按钮',
      name:this.props.name
    }
    console.log('类组件：',this)
  }
  ShowOne = (flag,value) => {
    console.log(' 我是赋值格式的箭头函数 ',this)
    const{key}=this.state
    const{name}=this.props
    flag === 'left' ? console.log(key,'-',name,'-',value || '') : console.log(name,'-',key)
  }
  ShowTwo = function(){
    console.log(' 我是赋值格式普通函数 ',this)
  }
  Test(){
    console.log(' 我是普通格式的函数 ',this)
  }
  render(){
    const{children}=this.props
    return(
      <div className='bottom-button'>
        {/* 输出该组件对象 */}
        <Button type="primary" size='small' onClick={this.ShowOne('left')}>
          <span className='button-context'>1</span>
        </Button>
        {/* 输出undefined,因为babel转义的时候，babel有增加严格模式，所以是undefined */}
        <Button type="primary"  size='small' className='button-context' onClick={this.ShowTwo}>2</Button>
        {/* 因为箭头函数的原因，this指向继承与外层，输出该组件对象 */}
        <Button type="primary" size='small' className='button-context' onClick={()=>{this.Test('left')}}>3</Button>
        {/* 普通函数，因为类中的函数会局部增加严格模式，输出undefined */}
        <Button type="primary" size='small' className='button-context' onClick={this.Test('left')}>4</Button>
        {children}
      </div>
    )
  }
}