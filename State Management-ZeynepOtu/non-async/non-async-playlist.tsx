import React, { useState } from 'react';

interface PlaylistItem {
  title: string;
  duration: number;
}

const playlistData: PlaylistItem[] = [
  { title: 'Song 1', duration: 180 },
  { title: 'Song 2', duration: 200 },
  { title: 'Song 3', duration: 220 },
  { title: 'Song 4', duration: 240 },
];

const Playlist: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(-1);

  const toggleActiveItem = (index: number) => {
    setActiveItemIndex(activeItemIndex === index ? -1 : index);
  };

  return (
    <div>
      {playlistData.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleActiveItem(index)}>{item.title}</button>
          {activeItemIndex === index && (
            <div>
              <p>Title: {item.title}</p>
              <p>Duration: {item.duration}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Playlist;
