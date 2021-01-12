import React, { Component } from 'react';

class Course extends Component {
    render () {
        const query = this.props.location.search.slice(1);
        let title = '';

        if (query.indexOf('=') >= 0){
            title = decodeURIComponent( query.split('=')[1] );
        }

        return (
            <div>
                <h1>{ title }</h1>
                <p>You selected the Course with ID: { this.props.match.params.id } </p>
            </div>
        );
    }
}

export default Course;