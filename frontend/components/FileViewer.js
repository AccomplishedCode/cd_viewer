import { useState } from "react";
import styled from "styled-components";

import FileCard from "./FileCard";
import CardViewIcon from "./Icons/CardViewIcon";
import ListViewIcon from "./Icons/ListViewIcon";
import FileList from "./FileList";

import { usePreview } from "../lib/preview";

const FileViewerStyles = styled.div`
  padding-left: 2.5rem;

  .file-container--card {
    display: flex;
    gap: 2rem;
  }

  .file-container--list {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    max-width: ${({ showPreview }) => (showPreview ? "100%" : "75%")};
    padding-right: 1rem;

    & .header {
      display: grid;
      grid:
        "name date size" 1fr
        / 2fr 1fr 1fr;

      & #name {
        grid-area: name;
      }

      & #modified {
        grid-area: date;
      }

      & #size {
        grid-area: size;
      }
    }
  }

  .top {
    display: flex;
    align-items: center;
    column-gap: 3rem;

    margin-bottom: 2.5rem;
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.5rem;
  }
`;

export default function FileViewer({ folderName, files }) {
  const { showPreview } = usePreview(); // context API to handle preview

  const [isListView, setIsListView] = useState(false);

  const renderedFileCards = files?.map(file => {
    return <FileCard key={file.id} name={file.name} id={file.id} />;
  });

  const renderedFileLists = files?.map(file => {
    return <FileList key={file.id} {...file} />;
  });

  return (
    <FileViewerStyles isListView={isListView} showPreview={showPreview}>
      <div className="top">
        <h2>
          {folderName}{" "}
          <span className="body-light">{`(${files?.length} ${
            files?.length === 1 ? "item" : "items"
          })`}</span>
        </h2>
        <div className="icons">
          <div onClick={() => setIsListView(false)}>
            <CardViewIcon active={!isListView} />
          </div>
          <div onClick={() => setIsListView(true)}>
            <ListViewIcon active={isListView} />
          </div>
        </div>
      </div>

      {!isListView ? (
        <div className="file-container--card">{renderedFileCards}</div>
      ) : (
        <div className="file-container--list">
          <div className="header">
            <h5 id="name">Name</h5>
            <h5 id="modified">Date Modified</h5>
            <h5 id="size">Size</h5>
          </div>
          {renderedFileLists}
        </div>
      )}
    </FileViewerStyles>
  );
}
