import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {

        const {items, clearList, handleDelete, handleSelection} = this.props;

        return (
            <ul className="list-group my-5">
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
                                handleDelete={()=>handleDelete(item.id)}
                                handleSelection={()=>handleSelection(item.id)}
                            />
                        )
                    })
                }

            </ul>

        );
    }
}

export default TodoList;