import React from 'react';

export default class TableBody extends React.Component {

  getUnique(arr, comp) {

    const unique = arr
      .map(e => e[comp])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);

    return unique;
  }

  render () {
    let sortedItems = this.props.items.sort((a, b) => b.duration - a.duration),sortedUniqueItems = this.getUnique(sortedItems,'movieName');
    return (
      <table>
        {sortedUniqueItems.map(item => <tr><td>{item.movieName}</td><td>{item.ratings}</td><td>{item.duration}</td></tr>)}
      </table>
    );
  }
}