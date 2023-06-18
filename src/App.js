import React, { Component } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import PubSub from "pubsub-js";
import context from "./context";
import "./App.css";
export default class App extends Component {
 state = {
    todos: [
      {
        id: 1,
        isDone: true,
        isName: "洗澡",
      },
      {
        id: 2,
        isDone: true,
        isName: "睡觉",
      },
      {
        id: 3,
        isDone: true,
        isName: "吃饭",
      },
    ],
    eitId:undefined
  };

  //挂载时
  componentDidMount() {
    //添加功能得订阅
      //pubsub.subscribe这个函数调用返回一个类似于timer得值就是用来清除得怕占内存
    this.add = PubSub.subscribe("add", (xx, isName) => {
      //创建一个对象然后把对象和原来得数组和并
    let  newArr = {
        id: Date.now(),
        isDone: true,
        isName,
      };
      this.state.todos.push(newArr);
      console.log(this.state.todos);
      this.setState({ todos: this.state.todos });
    });
    //先把文本框弄出来   首先创建一个变量，让这个变量和点击得选项的id作比较
      //修改edtid 订阅
  /*   this.seteitId = PubSub.subscribe('eitId',(_,id)=>{
        this.setState({eitId:id})
      })
 */
  }




  //组件卸载时
  componentWillUnmount(){
    //清除add这个订阅
    PubSub.unsubscribe(this.add)
    PubSub.unsubscribe( this.seteitId)
  }
  render() {
    let{eitId}=this.state
    return (
    <context.provider value={eitId}>
  <div className="todo-container">
        <div className="todo-wrap">
          <Header></Header>
          <div>
            <List todos={this.state.todos} ></List>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </context.provider>
    );
  }
}
