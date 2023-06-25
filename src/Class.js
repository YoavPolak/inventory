import React from 'react';

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            title: "Set Title"

        };
    }

    clickedButton() {
        this.setState({count: this.state.count  + 1, title: "New Title"})
    }

    render() {
        return(
            <div>
            <p>Title: {this.state.title}</p>
            <p>Clicked: {this.state.count}</p>
            <button className='btn btn-primary' onClick={() => this.clickedButton()}>Click!</button>
            </div>
        )
    }
}

