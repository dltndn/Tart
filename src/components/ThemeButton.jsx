import styled from "styled-components";

const ThemeButton = ({name, orederNum, onClick})=> {
    return (<div>
        <ThemeGroup orederNum = {orederNum}>
            <ThemeBox onClick={onClick}>
                <ThemeText>
                    <div>{name}</div>
                </ThemeText>
            </ThemeBox>
        </ThemeGroup>
    </div>)
    };
    
const ThemeText = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;

    display: flex;
    align-items: center;
    letter-spacing: -0.01em;

    color: #FFFFFF;
`;

const ThemeBox = styled.div`
    padding: 24px 16px;

    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;  
`;

const ThemeGroup = styled.div`
    width: 145px;
    height: 75px;

    flex: none;
    order: ${(props) => props.orederNum};
    flex-grow: 0;
`;

export default ThemeButton;