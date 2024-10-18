import React from 'react';

function TrackRow({ track }) {
  return (
    <tr className={track.state === 'Habilitado' ? 'enabled' : 'disabled'}>
      <td>{track.name}</td>
      <td>{track.state === 'Habilitado' ? '✔️' : '❌'}</td>
      <td>{track.difficulty}</td>
      <td>{track.snowType}</td>
    </tr>
  );
}

export default TrackRow;
