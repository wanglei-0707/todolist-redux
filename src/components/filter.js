import React from 'react';

class Filter extends React.Component{
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <label>
                <input type="radio" name="filter" />
                {this.props.filter}
            </label>
        );
    }
}

export default Filter;
