import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {

        const {items, clearList, deleteItem, selectItem} = this.props;

        return (
            <div className="card card-body my-5">
            <ul className="list-group ">
                <h3 className="text-capitalize text-center">Item list</h3>
                <div className="row my-3">
                    <div className="col">
                        <button onClick={clearList} className="btn btn-danger pull-right">Clear list</button>
                    </div>
                </div>
                {
                    items.map(item => {
                        return(
                            <TodoItem
                                key={item.id}
                                title={item.title}
                                complete={item.isComplete}
                                deleteItem={()=>deleteItem(item.id)}
                                selectItem={()=>selectItem(item.id)}
                            />
                        )
                    })
                }

            </ul>
            </div>

        );
    }
}

export default TodoList;