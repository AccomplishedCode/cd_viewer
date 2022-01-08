import styled from "styled-components";
import Link from "next/link";

import FolderIcon from "./Icons/FolderIcon";

const FolderCardStyles = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  align-items: center;

  &:hover div {
    color: var(--grey1);
    background: var(--greyWhite);
  }
`;

export default function FolderCard({ name, files, id }) {
  return (
    <Link href={`/viewer/folder/${id}`}>
      <FolderCardStyles>
        <FolderIcon num={files?.length} />
        <p>{name}</p>
      </FolderCardStyles>
    </Link>
  );
}
