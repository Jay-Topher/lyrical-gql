import React from "react";
import gql from "graphql-tag";
import { graphql } from "@apollo/react-hoc";
import { Link } from "react-router-dom";
import query from "../queries/fetchSongs";

const SongList = (props) => {
  const onDelete = (id) => {
    props.mutate({ variables: { id } })
    .then(() => props.data.refetch());
  };
  const renderSongs = () => {
    return props.data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
          <i className="material-icons" onClick={() => onDelete(song.id)}>
            delete
          </i>
        </li>
      );
    });
  };

  if (props.data.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      title
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
