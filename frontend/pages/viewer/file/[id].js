import styled from "styled-components";
import { useRouter } from "next/router";

import PointCloud from "../../../components/pointcloud";

const FileStyles = styled.section`
  button {
    position: absolute;
    top: 6rem;

    z-index: 1000;
  }
`;

export default function File() {
  const router = useRouter();

  return (
    <FileStyles>
      <button onClick={() => router.back()}>{"<- Back"}</button>
      <PointCloud />
    </FileStyles>
  );
}
