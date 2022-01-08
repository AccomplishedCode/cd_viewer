import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import FileIcon from "./Icons/FileIcon";
import { usePreview } from "../lib/preview";

const FileCardStyles = styled.div`
  cursor: pointer;
  word-break: break-all;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;

  max-width: 6rem;

  &:hover div {
    background: var(--greyWhite);
  }
`;

export default function FileCard({ name, id }) {
  const router = useRouter();
  const { pathname } = router;

  const { handleFileClick, currentSelected } = usePreview(); // context API to handle preview

  const [isActive, setIsActive] = useState(currentSelected === id);

  useEffect(() => {
    setIsActive(currentSelected === id);
  }, [currentSelected]);

  // if the user is on the homepage just show the card that allows the user to click through
  // otherwise, show the user a card that can be previewed
  return pathname === "/" ? (
    <Link href={"/viewer/file/123"}>
      <FileCardStyles data-name={id}>
        <FileIcon />
        <p>{name}</p>
      </FileCardStyles>
    </Link>
  ) : (
    <FileCardStyles
      onDoubleClick={() => router.push(`/viewer/file/${id}`)}
      onClick={handleFileClick}
      data-name={id}>
      <FileIcon isActive={isActive} />
      <p>{name}</p>
    </FileCardStyles>
  );
}
