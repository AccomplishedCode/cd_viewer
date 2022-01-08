import styled from "styled-components";

import FolderCard from "../components/FolderCard";
import FileCard from "../components/FileCard";

import data from "../lib/data.json";

const HomeStyles = styled.section`
  & section:not(:last-child) {
    margin-bottom: 5rem;
  }

  h1 {
    margin-bottom: 2.5rem;
  }

  .card-container {
    display: flex;

    & > *:not(:last-child) {
      margin-right: 5.75rem;
    }
  }
`;

export default function Home() {
  // !====== REPLACE WITH DATA FROM API =====
  const folders = data.folders.slice(0, 5); // TODO: only take 5 then allow for the user to "see more"

  const renderedFolders = folders.map(folder => {
    return <FolderCard key={folder.id} {...folder} />;
  });

  return (
    <HomeStyles>
      <section>
        <h1>Recent Files</h1>
        <div className="card-container">
          <FileCard name={"boat1"} />
          <FileCard name={"boat2"} />
          <FileCard name={"boat3"} />
        </div>
      </section>

      <section>
        <h1>Folders</h1>
        <div className="card-container">{renderedFolders}</div>
      </section>

      <section>
        <h1>Boats</h1>
        <div className="card-container">
          <FileCard name={"boat1"} />
          <FileCard name={"boat2"} />
          <FileCard name={"boat3"} />
        </div>
      </section>
    </HomeStyles>
  );
}
