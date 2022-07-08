import styled from "styled-components";

const BackIcon = () => {
  return (
    <div>
      <ExGroup>
        <Icon></Icon>
      </ExGroup>
    </div>
  );
};

const ExGroup = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 16px;
  top: 16px;
`;

const Icon = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  left: 7px;
  top: 12px;

  border-top: 2px solid #000000;
  border-left: 2px solid #000000;
  transform: rotate(-45deg);
`;

export default BackIcon;
