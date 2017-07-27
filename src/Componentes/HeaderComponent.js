import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HeaderComponent extends React.Component {
    render() {
        let txt_data=this.props.txt
        return (
            <h1> {txt_data} </h1>
        );
    }
}

HeaderComponent.propTypes = {
  txt: React.PropTypes.string
}

HeaderComponent.defaultProps = {
  txt: "working with default props"
}
