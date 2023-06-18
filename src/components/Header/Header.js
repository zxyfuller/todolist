import React, { Component } from 'react'
import './Header.css'
import PubSub from 'pubsub-js'
export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input type="text"  
        //获得用户输入得内容
     /*    onKeyUp={(e)=>{
          let value1  = e.target.value.trim()
          if (e.key!=='Enter'|| !value1)return
           
            PubSub.publish('add',value1)
          
          }}   */
        />
      </div>
    )
  }
}
