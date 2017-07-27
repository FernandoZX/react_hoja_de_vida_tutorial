import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListComponent extends React.Component {
    render() {
        const lists_data = this.props.lists;
        const listItems = lists_data.map((element) =>
          <li>{element}</li>
        );
        return (
           <ul>{listItems}</ul>
        );
    }
    
}

ListComponent.propTypes = {
  lists: PropTypes.array
}

ListComponent.defaultProps = {
  lists: []
}
