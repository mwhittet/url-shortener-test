import React from "react";
import { Button, Input, Title } from "./styled";

const Entry = ({ handleChange, shortenLink, url }) => {
  return (
    <>
      <Title>URL shortener</Title>
      <Input placeholder="Copy/type link here" onChange={handleChange} />
      <Button
        type="button"
        onClick={() => {
          shortenLink({ variables: { url } });
        }}
      >
        Shorten!
      </Button>
    </>
  );
};

export default Entry;
