import React, {Component} from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import {v4 as uuidv4} from 'uuid';

class App extends Component {
    state = {
        items: [],
        id: uuidv4(),
        item: '',
        editItem: false,
    };

    changeTitle = (e) => {
        this.setState({
            item: e.target.value
        });
    };

    submitItem = (e) => {
        e.preventDefault();

        const newItem = {
            id: this.state.id,
            title: this.state.item,
            time: Date.now(),
            isComplete: false
        };

        const updatedItems = [...this.state.items, newItem];

        updatedItems.sort(function (a, b) {
            return b.time - a.time;
        });

        this.setState({
            items: updatedItems,
            item: '',
            id: uuidv4(),
            editItem: false,
        });

        //console.log(this.state.items);
    };

    clearList = () => {
        this.setState({
            items: []
        })
    };

    deleteItem = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        })
    };

    selectItem = (id) => {
        //const filteredItems = this.state.items.filter(item => item.id !== id);

        const selectedItem = this.state.items.find(item => item.id === id);

        this.setState({
            items: this.state.items,
            item: selectedItem.title,
            editItem: true,
            id: id
        })
    };

    updateItem = (e) => {
        e.preventDefault();
        const itemList = this.state.items;
        const selectedItem = this.state.items.find(item => item.id === this.state.id);
        const index = this.state.items.findIndex(item => item.id === this.state.id);

        if (index >= 0) {
            const newItem = {
                id: this.state.id,
                title: this.state.item,
                time: selectedItem.time,
                editItem: false,
                isComplete: false
            };
            itemList[index] = newItem;
        }

        itemList.sort(function (a, b) {
            return b.time - a.time;
        });

        itemList.sort(function (a, b) {
            return a.isComplete - b.isComplete;
        });

        this.setState({
            items: itemList,
            id: uuidv4(),
            item: '',
            editItem: false
        });

        //console.log(this.state.items);
    };

    completeItem = () => {
        const itemList = this.state.items;
        const selectedItem = this.state.items.find(item => item.id === this.state.id);
        const index = this.state.items.findIndex(item => item.id === this.state.id);

        if (index >= 0) {
            const newItem = {
                id: selectedItem.id,
                title: selectedItem.title,
                time: selectedItem.time,
                editItem: false,
                isComplete: true
            };

            itemList[index] = newItem;
        }

        itemList.sort(function (a, b) {
            return a.isComplete - b.isComplete;
        });

        this.setState({
            items: itemList,
            id: uuidv4(),
            item: '',
            editItem: false
        });

        //console.log(this.state.items);
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col mx-auto mt-4">
                        <h1 className="text-capitalize text-center">
                            TO-DO APP
                        </h1>
                            <div className="card card-body mt-3">
                                <p>To Add an Item to the list, just type the text in the Add Item input field and click
                                    Add button. To select an item to Edit, just click the icon with the pencil and
                                    notebook and to do will display on the input field. Then click edit button to edit
                                    the item. To delete an item click the trash bin icon next to the to do item. To mark
                                    the To Do as complete, click on the mark complete button after selecting a item to
                                    be edited.
                                </p>
                            </div>
                        <div className="row">
                            <div className="col-md-6">
                                <TodoInput
                                    item={this.state.item}
                                    id={this.state.id}
                                    changeTitle={this.changeTitle}
                                    submitItem={this.submitItem}
                                    updateItem={this.updateItem}
                                    completeItem={this.completeItem}
                                    editItem={this.state.editItem}
                                />
                            </div>
                            <div className="col-md-6">
                                <TodoList
                                    items={this.state.items}
                                    clearList={this.clearList}
                                    deleteItem={this.deleteItem}
                                    selectItem={this.selectItem}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
