import React, {Component} from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    state = {
        items:[],
        id:uuidv4(),
        item:'',
        editItem:false,
    };

    handleChange = (e) =>{
        this.setState({
            item:e.target.value
        });
    };

    handleSubmit = (e) =>{
        e.preventDefault();

        const newItem = {
            id:this.state.id,
            title:this.state.item,
            time:Date.now(),
            isComplete:false
        };

        const updatedItems = [...this.state.items, newItem];

        updatedItems.sort(function (a, b) {
            return b.time - a.time;
        });

        this.setState({
            items:updatedItems,
            item:'',
            id:uuidv4(),
            editItem:false,
        });

        console.log(this.state.items);
    };

    clearList = ()=>{
        this.setState({
            items:[]
        })
    };

    handleDelete = (id)=>{
      const filteredItems = this.state.items.filter(item => item.id !== id);
      this.setState({
          items:filteredItems
      })
    };

    handleSelection = (id) =>{
       //const filteredItems = this.state.items.filter(item => item.id !== id);

       const selectedItem = this.state.items.find(item => item.id === id);

        this.setState({
            items:this.state.items,
            item:selectedItem.title,
            editItem:true,
            id:id
        })
    };

    handleUpdate = (e) =>{
        e.preventDefault();
        const itemList = this.state.items;
        const selectedItem = this.state.items.find(item => item.id === this.state.id);
        const index = this.state.items.findIndex(item => item.id === this.state.id);

        const newItem = {
            id:this.state.id,
            title:this.state.item,
            time:selectedItem.time,
            editItem: false,
            isComplete: false
        };

        itemList[index] = newItem;

        itemList.sort(function (a, b) {
            return b.time - a.time;
        });

        this.setState({
            items:itemList,
            id:uuidv4(),
            item:'',
            editItem:false
        });

        console.log(this.state.items);
    };

    handleComplete = ()=>{
        const itemList = this.state.items;
        const selectedItem = this.state.items.find(item => item.id === this.state.id);
        const index = this.state.items.findIndex(item => item.id === this.state.id);

        const newItem = {
            id:selectedItem.id,
            title:selectedItem.title,
            time:selectedItem.time,
            editItem: false,
            isComplete: true
        };

        itemList[index] = newItem;

        itemList.sort(function (a, b) {
            return a.isComplete - b.isComplete;
        });

        this.setState({
            items:itemList,
            id:uuidv4(),
            item:'',
            editItem:false
        });

        console.log(this.state.items);
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto mt-4">
                        <h1 className="text-capitalize text-center">
                            To-do App
                        </h1>
                        <TodoInput
                            item={this.state.item}
                            id={this.state.id}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleUpdate={this.handleUpdate}
                            handleComplete={this.handleComplete}
                            editItem={this.state.editItem}
                        />
                        <TodoList
                            items={this.state.items}
                            clearList={this.clearList}
                            handleDelete={this.handleDelete}
                            handleSelection={this.handleSelection}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
