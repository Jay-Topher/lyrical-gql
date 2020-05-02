import React from "react";
import gql from "graphql-tag";
import { graphql } from "@apollo/react-hoc";

const SongList = (props) => {
  const renderSongs = () => {
    return props.data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  };

  if (props.data.loading) {
    return <p>Loading...</p>;
  }

  return <ul className="collection">{renderSongs()}</ul>;
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
