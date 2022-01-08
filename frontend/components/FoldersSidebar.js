import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import data from "../lib/data.json";

const FoldersSidebarStyles = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 2.5rem;
  }

  h5 {
    color: var(--grey3);
    cursor: pointer;

    &:hover {
      color: var(--greyWhite);
    }
  }

  .names-container {
    padding-left: 2rem;

    & *:not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }

  .active {
    color: var(--greyWhite);
  }
`;

export default function FoldersSidebar() {
  const router = useRouter();
  const { id } = router.query;

  // !====== REPLACE WITH DATA FROM API =====
  const folders = data.folders;

  const renderedFolders = folders.map(folder => {
    return (
      <Link href={`/viewer/folder/${folder.id}`}>
        <h5 className={folder.id === id ? "active" : ""}>{folder.name}</h5>
      </Link>
    );
  });

  return (
    <FoldersSidebarStyles>
      <h2>Folders</h2>
      <div className="names-container">{renderedFolders}</div>
    </FoldersSidebarStyles>
  );
}
