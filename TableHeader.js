import React from 'react';

export default function TableHeader(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Movie Name</th>
          <th>Ratings</th>
          <th>Duration (in hours.)</th>
        </tr>
      </tbody>
    </table>
  );
};