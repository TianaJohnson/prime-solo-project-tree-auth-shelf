import React, {Component} from 'react';

class Shelf extends Component {
    handleAddToShelf = () =>{
        this.props.history.push('/add')
    }
    render(){
        return (
            <div>
                <table className="table-style">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                   <tbody>

                   </tbody>
                    
                </table>

                <button onClick={this.handleAddToShelf}>Add to Shelf</button>
            </div>
        );
    }
}

export default Shelf;