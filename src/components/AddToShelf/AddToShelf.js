import React, {Component} from 'react';

class AddToShelf extends Component {
    constructor() {
        super();

        this.state = {
            shelfItem: {
                description: '',
                image_url: '',
                person_id: 0
            }
        }
    }
    render(){
        return (
            <div>
                <h3>This is where an item will be added to the shelf</h3>
            </div>
        );
    }
}

export default AddToShelf;