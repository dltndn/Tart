import styled from "styled-components";

const MenuTab = ( { onClickMenuButton} ) => {
  const onClick1 = () => {
    onClickMenuButton(1);
  }

  const onClick2 = () => {
    onClickMenuButton(2);
  }

  return (
    <div>
      <MenuTabBox>
        <TopBAr />
        <ExGroup left={"0%"} right={"50%"} onClick={onClick1}>
            <GroupBg left={"0%"} right={"0%"} bg={"#EEEEEE"}>
              <DescriptionFont left={"17.87%"} right={"17.75%"} weight={"700"}>
                상품설명
              </DescriptionFont>
            </GroupBg>
        </ExGroup>
        <ExGroup left={"50%"} right={"0%"} onClick={onClick2}> 
            <GroupBg left={"0%"} right={"0%"} bg={"#FFFFFF"}>
              <DescriptionFont left={"13.46%"} right={"8.16%"} weight={"400"}>
                상품후기
              </DescriptionFont>
            </GroupBg>
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

const TopBAr = styled.div`
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
