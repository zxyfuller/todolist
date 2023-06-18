import React, { Component } from 'react'
import './Item.css'
import PubSub from 'pubsub-js'
import context from '../../context'

export default class Item extends Component {
//设置一个静态属性，这个属性的值就是要传递的数据  也是接受context发送数据的方式之一
  static contextType = context

  render() {
    let eitId = this.context
    let{todo:{id,isName}}=this.props
  
    return (
      <li>
    {  eitId!==id  ?(<label>
          <input type="checkbox" />
          <span>{isName}</span>
        </label>):
         (<input type='text' />)}
        <button className="btn btn-danger">删除</button>

        <button className="btn btn-dan" onClick={()=>{
        //这里是发布者
            // PubSub.publish('setEdiId',eitId!==id?id:undefined) 
            
        }}   >
          {eitId !==id ?'编译':'取消'}
        </button>
      </li>
    )
  }
}
