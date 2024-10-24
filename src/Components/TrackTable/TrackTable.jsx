import React from 'react';
import TrackRow from '../TrakRow/TrackRow';
import './TrackTable.css';

const sectors = [
  {
    name: 'Sector 1',
    tracks: [
      { name: 'Pista 1', state: 'No Habilitado', difficulty: 'Media',},
      { name: 'Pista 2', state: 'Habilitado', difficulty: 'Fácil'},
      { name: 'Pista 3', state: 'No Habilitado', difficulty: 'Difícil'},
    ],
  },
  {
    name: 'Sector 2',
    tracks: [
      { name: 'Pista 1', state: 'No Habilitado', difficulty: 'Avanzado'},
      { name: 'Pista 2', state: 'Habilitado', difficulty: 'Fácil'},
      { name: 'Pista 3', state: 'Habilitado', difficulty: 'Difícil'},
    ],
  },
];

function TrackTable() {
  return (
    <div className="track-table">
      {sectors.map((sector, index) => (
        <div key={index} className="sector">
          <h2 className='sectorTitle'>{sector.name}</h2>
          <table>
            <thead>
              <tr>
                <th>Pista</th>
                <th>Estado</th>
                <th>Dificultad</th>
              </tr>
            </thead>
            <tbody>
              {sector.tracks.map((track, index) => (
                <TrackRow key={index} track={track} />
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default TrackTable;
