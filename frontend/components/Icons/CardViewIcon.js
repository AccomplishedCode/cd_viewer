import styled from "styled-components";

const CardViewIconStyles = styled.svg`
  cursor: pointer;
`;

export default function CardViewIcon({ active }) {
  const fill = active ? "#E0E5EB" : "#3D4C5C";

  return (
    <CardViewIconStyles
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="8" fill={fill} />
      <rect x="12" width="8" height="8" fill={fill} />
      <rect x="24" width="8" height="8" fill={fill} />
      <rect y="12" width="8" height="8" fill={fill} />
      <rect x="12" y="12" width="8" height="8" fill={fill} />
      <rect x="24" y="12" width="8" height="8" fill={fill} />
      <rect y="24" width="8" height="8" fill={fill} />
      <rect x="12" y="24" width="8" height="8" fill={fill} />
      <rect x="24" y="24" width="8" height="8" fill={fill} />
    </CardViewIconStyles>
  );
}

CardViewIcon.defaultProps = {
  active: false,
};
