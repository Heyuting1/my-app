import './style.css'
import { Button, Toast } from 'antd-mobile'
import React from 'react'


/*
 * @Author: heyuting009
 * @Date: 2021-10-11 16:46:30
 * @LastEditTime: 2021-10-11 16:51:48
 * @LastEditors: heyuting009
 * @Description: 验证toast需要传入字符串
 */
export default class ToastButton extends React.Component{
  constructor(){
    super()
    this.state={
      arrayTest:{
        a:'1',
        b:'2'
      },
    }
  }
  showToast= () =>{
    // 验证toast需要传入字符串
    Toast.info('This  is a toast tips !!!', 2)
    console.log('this', this)
    //验证try（）catch，catch不到其中的promise的异常
    // try {
    //   const promise = new Promise((resolve, reject) => {
    //     //resolve('fulfilled'); // 状态由 pending => fulfilled
    //     reject('失败')
    //   });
    //   promise.then(result => { // onFulfilled
    //     console.log(result); // 'fulfilled'
    //   }
    //   // reason => { // onRejected 不会被调用
    //   //   console.log(reason);
    //   // }
    //   )
    // } catch (err){
    //   console.log('catch失败',err)
    // }

  }

  render(){
    const {arrayTest}=this.state
    return(
      <Button type='primary' onClick={()=>{this.showToast(arrayTest)}}>text only</Button>

    )
  }
}