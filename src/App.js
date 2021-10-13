import logo from './logo.svg'
import './App.css'
import React from 'react'
import { Button, Tabs, Badge, WhiteSpace } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css';
import BottonAndText from './component/BottomButton'
import PickerButton from './component/PickerButton'
import ToastButton from './component/ToastButton'


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
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      tabs:[
        { title: <Badge><span className='badge-style'>Toast组件使用</span></Badge> },
        { title: <Badge><span className='badge-style'>React中this</span></Badge> },
        { title: <Badge><span className='badge-style'>样式组件</span></Badge> },
      ]
    }
  }


  // const key1 ='我是变量key1'
  // return array['c'] && <div></div>
  render(){
    const {tabs} = this.state
    return(
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
          <WhiteSpace/>
          <Tabs tabs={tabs}
            initialPage={1}
            // onChange={(tab, index) => { console.log('onChange', index, tab) }}
            // onTabClick={(tab, index) => { console.log('onTabClick', index, tab)}}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              <ToastButton/>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              <BottonAndText
                name={'小按钮'}
              >
                {
                  <div className='picker-children'>
                    <Button type='ghost'>children文字</Button>
                  </div>
                }
              </BottonAndText>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
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
            </div>
          </Tabs>
          {/* <Button type='primary' onClick={showToast}>text only</Button> */}



        </header>
      </div>
    )
  }
}

export default App
