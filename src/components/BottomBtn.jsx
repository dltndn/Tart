import styled from "styled-components";

const BottomBtn = ( { onClick, title }) => {

  return (
    <div>
      <ExGroup onClick={onClick}>
        <Rectangle>
            <FontStyle>{title}</FontStyle>
        </Rectangle>
      </ExGroup>
    </div>
  );
};

const ExGroup = styled.div`
  position: fixed;
  width: 390px;
  height: 70px;
  left: 0px;
  top: 776px;
`;

const Rectangle = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #24dbaf;
`;

const FontStyle = styled.div`
  position: absolute;
  left: 38.21%;
  right: 38.46%;
  top: 34.29%;
  bottom: 35.71%;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;

  color: #000000;
`;

export default BottomBtn;
