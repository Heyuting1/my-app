/*
 * @Author: heyuting009
 * @Date: 2021-09-22 18:37:36
 * @LastEditTime: 2021-10-09 17:53:14
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
  Show = (flag,value) => {
    const{key}=this.state
    const{name}=this.props
    flag === 'left' ? console.log(key,'-',name,'-',value || '') : console.log(name,'-',key)
  }
  render(){
    const{key}=this.state
    const{name, children}=this.props
    // const dom =  <div className='bottom-button'>
    //   <Button type="primary" onClick={()=>{this.Show('left')}}>{key}-{name}</Button>
    //   <Button type="primary" onClick={()=>{this.Show('right')}}>{name}-{key}</Button>
    //   {children}
    // </div>
    // return dom
    return(
      <div className='bottom-button'>
        <Button type="primary" onClick={()=>{this.Show('left')}}>{key}-{name}</Button>
        <Button type="primary" onClick={()=>{this.Show('right')}}>{name}-{key}</Button>
        {children}
      </div>
    )
  }
}