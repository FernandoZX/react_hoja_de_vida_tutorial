import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SectionComponent extends React.Component {

    render() {
        let txt_data=this.props.description
        return (
            <div>
                <section>
                    {txt_data}
                </section>
            </div>
        );
    }
}

SectionComponent.propTypes = {
  description: React.PropTypes.string
}

SectionComponent.defaultProps = {
  description: "working with default props"
}
