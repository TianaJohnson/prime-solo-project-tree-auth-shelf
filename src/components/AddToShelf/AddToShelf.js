import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddToShelf extends Component {
    constructor() {
        super();

        this.state = {
            description: '',
            image_url: '',
        }
    }

    // capture the description
    handleDescriptionChange = (event) => {
        this.setState({
            ...this.state,
            description: event.target.value,
        });
        //console.log(this.state.description);
        
    }

    // capture the image url
    handleImageChange = (event) => {
        this.setState({
            ...this.state,
            image_url: event.target.value,
        });
        //console.log(this.state.image_url);
        
    }

    // Runs when submit is clicked
    handleSubmit = (event) => {
        event.preventDefault();
        const action = {type: 'ADD_ITEMS', payload: this.state}
        this.props.dispatch(action);
    }

    handleBackClick = () => {
        this.props.history.push('/shelf')
    }
    render(){
        return (
            <div>
                <h3>This page will add to the shelf</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleDescriptionChange} type="text" placeholder="description"/>
                    <input onChange={this.handleImageChange} type="text" placeholder="image url"/>
                    <button>Submit</button>
                </form>
                <button onClick={this.handleBackClick}>BACK</button>
            </div>
        );
    }
}

export default connect()(AddToShelf);