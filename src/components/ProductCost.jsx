import styled from "styled-components";

const ProductCost = ({ cost }) => {
  return (
    <div>
      <CostStyle>{cost}</CostStyle>
    </div>
  );
};

const CostStyle = styled.div`
  position: absolute;
  left: 6.15%;
  right: 77.69%;
  top: 34.81%;
  bottom: 63.84%;

  /* Body1/Medium */

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */

  letter-spacing: -0.01em;

  color: rgba(0, 0, 0, 0.86);
`;

export default ProductCost;
