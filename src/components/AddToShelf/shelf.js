import React, {Component} from 'react';
import {connect} from 'react-redux';

class Shelf extends Component {
    // make a GET request when page loads
    componentDidMount() {
        const action = {type: 'FETCH_ITEMS'}
        this.props.dispatch(action);
    }
    // Sends you to form to fill out 
    handleAddToShelf = () =>{
        this.props.history.push('/add')
    }
    render(){
        return (
            <div>
                {JSON.stringify(this.props.reduxStore.shelf)}
                <table className="table-style">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                   <tbody>
                        {this.props.reduxStore.shelf.map(item => {
                            return <tr>
                                        <td>{item.description}</td>
                                        <td><img src={item.image} alt={item.description}/></td>
                                        <td><button>DELETE</button></td>
                                    </tr>
                        })}
                   </tbody>
                    
                </table>

                <button onClick={this.handleAddToShelf}>Add to Shelf</button>
            </div>
        );
    }
}

const mapStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapStoreToProps)(Shelf);