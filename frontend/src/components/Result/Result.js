import React from "react";
import { Text } from "./styled";

const Result = ({ baseURL, data }) => {
  return (
    <Text>
      Your shortened link:{" "}
      <a
        href={`${baseURL}${data.shortenLink.short_url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {baseURL}
        {data.shortenLink.short_url}
      </a>
    </Text>
  );
};

export default Result;
