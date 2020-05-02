import React, { useState } from "react";
import gql from "graphql-tag";
import { graphql } from "@apollo/react-hoc";

const SongCreate = (props) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(props)
    props.mutate({
      variables: {
        title: title,
      },
    });
  };
  return (
    <div>
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
