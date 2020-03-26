import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        const {complete, title, deleteItem, selectItem} = this.props;

        return (
            <li className="list-group-item border-top d-flex justify-content-between my-2">
                <div className="col-md-9">
                {complete ? <del>{title}</del> : <h6>{title}</h6>}
                </div>
                <div className="item-icon">
                    <span className="btn mx-2 text-success" onClick={selectItem}>
                        <i className="fa fa-edit" />
                    </span>
                    <span className="btn mx-2 text-danger" onClick={deleteItem}>
                        <i className="fa fa-trash" />
                    </span>
                </div>
            </li>
        );
    }
}

export default TodoItem;