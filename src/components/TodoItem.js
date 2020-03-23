import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        const {complete, title, handleDelete, handleSelection} = this.props;

        return (
            <li className="list-group-item border-top d-flex justify-content-between my-2">
                {complete ? <del>{title}</del> : <h6>{title}</h6>}
                <div className="item-icon">
                    <span className="mx-2 text-success" onClick={handleSelection}>
                        <i className="fa fa-edit" />
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fa fa-trash" />
                    </span>
                </div>
            </li>
        );
    }
}

export default TodoItem;