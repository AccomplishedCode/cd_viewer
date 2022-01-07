import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import FoldersSidebar from "../../../components/FoldersSidebar";
import FileViewer from "../../../components/FileViewer";
import Preview from "../../../components/Preview";

import data from "../../../lib/data.json";
import { usePreview } from "../../../lib/preview";

const ViewerStyles = styled.section`
  display: grid;
  grid: ${({ showPreview }) =>
    showPreview
      ? "'folders files preview' 1fr / 12rem 2fr 1fr"
      : "'folders files preview' 1fr / 12rem 1fr"};

  #folders {
    border-right: 2px solid var(--greyWhite);

    grid-area: folders;
  }

  #files {
    grid-area: files;
  }
  #preview {
    border-left: 2px solid var(--greyWhite);

    grid-area: preview;
  }
`;

export default function Viewer() {
  const router = useRouter();
  const { id } = router.query;

  const { showPreview, closePreview, currentSelected } = usePreview();

  const currentFolder = data.folders.find(folder => folder.id === id);
  const [currentFile, setCurrentFile] = useState({});

  useEffect(() => {
    const selection = currentFolder?.files.find(
      file => file.id === currentSelected
    );

    setCurrentFile(selection);
  }, [currentSelected]);

  useEffect(() => {
    return function cleanup() {
      closePreview();
    };
  }, [id]);

  return (
    <ViewerStyles showPreview={showPreview}>
      <section id="folders">
        <FoldersSidebar />
      </section>
      <section id="files">
        <FileViewer
          folderName={currentFolder?.name}
          files={currentFolder?.files}
        />
      </section>
      {showPreview && (
        <section id="preview">
          <Preview {...currentFile} />
        </section>
      )}
    </ViewerStyles>
  );
}
