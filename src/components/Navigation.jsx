import styled from "styled-components";

const Navigation = ()=> {
return (<div>
    <NavigationStyle>
        <NavigationTitle>
          <div>코멘토 쇼핑</div>
        </NavigationTitle>
    </NavigationStyle>
    <NavigationLine />
    
</div>)
};

const NavigationStyle = styled.div`
  width: 390px;
  height: 66px;
  left: 0px;
  top: 0px;

  
`;

const NavigationTitle = styled.div`
  position: absolute;
  height: 26px;
  left: 152px;
  top: 20px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

const NavigationLine = styled.div`
  position: absolute;
  width: 400px;
  height: 1px;
  left: -5px;
  top: 63px;
  background: #EEEEEE;
`;

export default Navigation;