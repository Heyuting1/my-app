import logo from './logo.svg'
import './App.css'
import React from 'react'
import { Button, Toast } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css';
import BottonAndText from './component/BottomButton'
import PickerButton from './component/PickerButton'


function showToast() {
  // 验证toast需要传入字符串
  Toast.info('This is a toast tips !!!', 2)
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
class Welcome extends React.Component {

  render() {
    const array={
      'a':'1',
      'b':'2'
    }
    return  array['c'] ? <div>显示：{array['c']}</div> :null

    // return  array['c'] && <div>显示：{array['c']}</div>
    // return (
    //   <div>{array}</div>
    // )

  }
}

function App(){
  const arrayTest={
    a:'1',
    b:'2'
  }
  // const key1 ='我是变量key1'
  // return array['c'] && <div></div>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React My-app
        </a>
        <Welcome/>
        {/* <Button type='primary' onClick={showToast}>text only</Button> */}
        <Button type='primary' onClick={()=>{showToast(arrayTest)}}>text only</Button>
        <BottonAndText
          name={'小按钮'}
        >
          {
            <div className='picker-children'>
              <Button type='ghost'>children文字</Button>
            </div>
          }
        </BottonAndText>
        <PickerButton
          // key1={key1}
          key1={'key1'}
        >
          {
            <div className='picker-children'>
              <span>我是一串children文字</span>
            </div>
          }
        </PickerButton>
      </header>
    </div>
    // <div>nihao </div>
  )
}

export default App
