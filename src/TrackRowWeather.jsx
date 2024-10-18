import React from 'react';

function TrackRow({ track }) {
  return (
    <tr className={track.state}>
      <td>{track.sector}</td>
      <td>{track.temperature + '°C'}</td>
      <td>{track.wind + 'km/h'}</td>
      <td>{track.direction}</td>
    </tr>
  );
}

export default TrackRow;
