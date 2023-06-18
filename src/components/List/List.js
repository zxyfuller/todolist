import React, { Component } from "react";
import Item from "../Item/Item";
import "./List.css";
export default class List extends Component {
  render() {
     let { todos} = this.props;
    return (
      <ul className="todo-main">
        {/* 上面接受到数据，我把接受到得数组遍历动态渲染 */}
        {/* 别写重名得 */}
        {todos.map((todo) => {
          //因为·如果·遍历得是组件·就要加key可以让React运行得更快
          let{id}=todo
          return <Item todo={todo} key={id}></Item>;
        })}
      </ul>
    );
  }
}
