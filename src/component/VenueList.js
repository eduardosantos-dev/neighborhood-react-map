import React, { Component } from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class VenueList extends Component {
/* Represents the List of venues that is displayed on the sidebar */
  render() {
    return (
      <div style={{ height: `100%` }}>
        <ul className="places-list">
          {this.props.filterVenues.filter && this.props.filterVenues.map((venue, idx) =>
            <ListItem
              key={idx}
              {...venue}
              handleListItemClick={this.props.handleListItemClick}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default VenueList;

VenueList.propTypes = {
  filterVenues: PropTypes.func.isRequired,
  handleListItemClick: PropTypes.func.isRequired
}