import React from 'react';
import GridItem from '../components/GridItem';

class Grid extends React.Component {
  render() {
    return (
      <div className="grid">
        { Array(40 * 40)
          .fill(null)
          .map((g, i) => <GridItem key={i} />)
        }
      </div>
    );
  }
}

export default Grid;