import React from 'react';
import parse from 'html-react-parser';

export default function Episodes(props) {
  return (
    <div className="episodes">
      {props.episodes.map(episode => (
        <div className="episode" key={episode.id}>
          {episode.image && (
            <img className="episode-image" src={episode.image.medium} alt={episode.name} />
          )}
          <div className="episode-info">
            <p className="episode-number">
              Season {episode.season}, Episode {episode.number}
            </p>
            <h3>{episode.name}</h3>
            {episode.summary && parse(episode.summary)}
            <div className="flex-spacer" />
            <p className="episode-runtime">{episode.runtime} minutes</p>
          </div>
        </div>
      ))}
    </div>
  );
}
