import styled from "styled-components";

const ListViewIconStyles = styled.svg`
  cursor: pointer;
`;

export default function ListViewIcon({ active }) {
  const fill = active ? "#E0E5EB" : "#3D4C5C";

  return (
    <ListViewIconStyles
      width="24"
      height="21.75"
      viewBox="0 0 32 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="8" fill={fill} />
      <line x1="12" y1="4" x2="32" y2="4" stroke={fill} strokeWidth="2" />
      <line y1="16" x2="32" y2="16" stroke={fill} strokeWidth="2" />
      <line y1="28" x2="32" y2="28" stroke={fill} strokeWidth="2" />
    </ListViewIconStyles>
  );
}
