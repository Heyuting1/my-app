import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Button, Toast } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css';

function showToast() {
  Toast.info('This is a toast tips !!!', 2);
  console.log('123')
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
function App() {
  const array={
    'a':'1',
    'b':'2'
  }
  console.log(array['c'])
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
        {null}
        {undefined}
        <Welcome/>
        <Button type='primary' onClick={showToast}>text only</Button>
      </header>
    </div>
  )
}

export default App;
