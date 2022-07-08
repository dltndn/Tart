import styled from "styled-components";

const MenuTab = () => {
  return (
    <div>
      <MenuTabBox>
        <TobBAr />
        <ExGroup left={"0%"} right={"50%"}>
          <InnerGroup left={"0%"} right={"-100%"}>
            <GroupBg left={"0%"} right={"50%"} bg={"#EEEEEE"}>
              <DescriptionFont left={"17.87%"} right={"17.75%"} weight={"700"}>
                상품설명
              </DescriptionFont>
            </GroupBg>
          </InnerGroup>
        </ExGroup>
        <ExGroup left={"50%"} right={"0%"}>
          <InnerGroup left={"-100%"} right={"0%"}>
            <GroupBg left={"50%"} right={"0%"} bg={"#FFFFFF"}>
              <DescriptionFont left={"13.46%"} right={"8.16%"} weight={"400"}>
                상품후기
              </DescriptionFont>
            </GroupBg>
          </InnerGroup>
        </ExGroup>
        <BottomBar />
      </MenuTabBox>
    </div>
  );
};

const MenuTabBox = styled.div`
  position: absolute;
  width: 390px;
  height: 49px;
  left: 0px;
  top: 586px;
`;

const TobBAr = styled.div`
  position: absolute;
  width: 390px;
  height: 1px;
  left: 0px;
  top: -1px;

  background: #eeeeee;
`;

const ExGroup = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: 0%;
  bottom: 2.04%;
`;

const DescriptionFont = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: 28.57%;
  bottom: 28.57%;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: 16px;
  line-height: 21px;

  text-align: center;
  letter-spacing: -0.01em;

  color: #000000;
`;

const InnerGroup = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: 0%;
  bottom: 2.04%;
`;

const GroupBg = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: 0%;
  bottom: 2.04%;

  background: ${(props) => props.bg};
`;

const BottomBar = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 97.96%;
  bottom: 0%;

  background: #eeeeee;
`;

export default MenuTab;
