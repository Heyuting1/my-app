/*
 * @Author: heyuting009
 * @Date: 2021-09-23 11:45:14
 * @LastEditTime: 2021-10-09 16:31:56
 * @LastEditors: heyuting009
 * @Description: 函数组件
 */
import './style.css'
// import { Button } from 'antd-mobile'
import React from 'react'

export default function PickerButton(props){

  const { key1,children }=props
  console.log('函数是组件；',this)
  return(
    <div className='picker-button'>
      <span>{key1}</span>
      <div>{children}</div>
    </div>
  )


}