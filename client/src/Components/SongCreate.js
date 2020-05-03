import React, { useState } from "react";
import gql from "graphql-tag";
import { graphql } from "@apollo/react-hoc";
import { Link } from "react-router-dom";
import query from '../queries/fetchSongs'

const SongCreate = (props) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    props
      .mutate({
        variables: {
          title: title,
        },
        refetchQueries: [{ query: query }]
      })
      .then(() => props.history.push("/"));
  };
  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a new song</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Song Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </form>
    </div>
  );
};

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
