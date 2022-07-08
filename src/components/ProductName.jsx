import styled from "styled-components";

const ProductName = ({ name }) => {
  return (
    <div>
      <NameStyle>{name}</NameStyle>
    </div>
  );
};

const NameStyle = styled.div`
  position: absolute;
  left: 6.15%;
  right: 58.72%;
  top: 32.63%;
  bottom: 65.7%;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  letter-spacing: -0.01em;

  color: #000000;
`;

export default ProductName;
