import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { usePreview } from "../lib/preview";

const FileListStyles = styled.div`
  cursor: pointer;
  border-radius: 0.3125rem;
  background: ${({ isActive }) =>
    isActive ? "var(--greyWhite)" : "transparent"};
  color: ${({ isActive }) => (isActive ? "var(--grey1)" : "var(--greyWhite)")};

  display: grid;
  grid:
    "name date size" 1fr
    / 2fr 1fr 1fr;

  padding: 1rem;

  &:hover {
    background: ${({ isActive }) =>
      isActive ? "var(--greyWhite)" : "var(--grey2)"};
  }
`;

export default function FileList({ id, name, dateModified, size }) {
  const router = useRouter();

  const { handleFileClick, currentSelected } = usePreview(); // context API to handle preview

  const [isActive, setIsActive] = useState(currentSelected === id);

  useEffect(() => {
    // every time the currentSelected variable changes, check to see if isActive is true or false
    setIsActive(currentSelected === id);
  }, [currentSelected]);

  return (
    <FileListStyles
      onDoubleClick={() => router.push(`/viewer/file/${id}`)}
      onClick={handleFileClick}
      isActive={isActive}
      data-name={id}>
      <p className="body-light">{name}</p>
      <p className="body-light">{dateModified}</p>
      <p className="body-light">{size}</p>
    </FileListStyles>
  );
}
