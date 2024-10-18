import React from "react";
import TrackRow  from "./TrackRowWeather";
import './Weather.css'

const weather = [
    {
      name: 'Zona 1',
      tracks: [
        { sector: 'Sector 1', temperature: '5', wind: '20', direction: '-' },
        { sector: 'Sector 2', temperature: '-2', wind: '10', direction: '-' },
        { sector: 'Sector 3', temperature: '0', wind: '15', direction: '-' },
      ],
    },
  ];
  
  function Weather() {
    return (
      <div className="weather-table">
        {weather.map((sector, index) => (
          <div key={index} className="weather">
            <h2 className="sectorTitle">{sector.name}</h2>
            <table>
              <thead>
                <tr>
                  <th>Sector</th>
                  <th>Temperatura</th>
                  <th>Viento</th>
                  <th>Dirección</th>
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

export default Weather