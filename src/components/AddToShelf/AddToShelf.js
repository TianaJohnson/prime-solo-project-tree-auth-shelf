import React, {Component} from 'react';

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
        console.log(this.state.description);
        
    }

    // capture the image url
    handleImageChange = (event) => {
        this.setState({
            ...this.state,
            image_url: event.target.value,
        });
        console.log(this.state.image_url);
        
    }

    handleBackClick = () => {
        this.props.history.push('/shelf')
    }
    render(){
        return (
            <div>
                <h3>This page will add to the shelf</h3>
                {JSON.stringify(this.state)}
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleDescriptionChange} type="text" placeholder="description"/>
                    <input onchange={this.handleImageChange} type="text" placeholder="image url"/>
                </form>
                <button onClick={this.handleBackClick}>BACK</button>
            </div>
        );
    }
}

export default AddToShelf;