import React, {Component} from 'react';

class TodoInput extends Component {
    render() {
        const {item, id, changeTitle, submitItem, editItem, updateItem, completeItem} = this.props;

        return (
            <div className="card my-5">
            <div className="card card-header">
                <h5>{editItem ? 'Edit Item' : 'Add Item'}</h5>
            </div>
            <div className="card card-body">

                <form onSubmit={editItem ? updateItem : submitItem}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book" />
                            </div>
                        </div>
                        <input type="text" className="form-control" value={item} onChange={changeTitle} placeholder={"Enter a to do item"} required/>
                    </div>
                    <div className="pull-left">
                        {
                            editItem ?  <button onClick={completeItem} className='btn btn-success mt-3'>Mark Complete</button> : ''

                        }
                    </div>
                    <div className="pull-right">
                        <input type="hidden" value={id}/>
                    <button type="submit" className={editItem ? 'btn btn-primary mt-3' :  'btn btn-success mt-3'}>
                        {editItem ? 'Edit' : 'Add'}
                    </button>

                    </div>

                </form>
            </div>
            </div>
        );

    }
}

export default TodoInput;