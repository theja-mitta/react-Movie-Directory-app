import React from 'react';

class Table extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <td>{data.movieName}</td>
              <td>{data.ratings}</td>
              <td>{data.duration}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;