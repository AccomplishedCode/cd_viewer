import Image from "next/image";
import styled from "styled-components";

const PreviewStyles = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 2.5rem;

  h5 {
    margin-bottom: 2.5rem;
  }

  p:first-of-type {
    margin-top: 1.5rem;
  }
`;

export default function Preview({ name, dateCreated, dateModified }) {
  return (
    <PreviewStyles>
      <h5>{name}</h5>
      <Image src="/screenshot.png" width="1000rem" height="1000rem" />
      <p>
        Date Created: <span className="body-light">{dateCreated}</span>
      </p>
      <p>
        Date Modified: <span className="body-light">{dateModified}</span>
      </p>
    </PreviewStyles>
  );
}
