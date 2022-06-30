import styled from "styled-components";

const ProductCard = ({name, description, thumbnail})=> {
    return (<div>
        <ProductBox>
        <PictureStyle src={thumbnail}
          alt={name}>
        </PictureStyle>
        <NameStyle>
        <div>{name}</div>
        </NameStyle>
        <DescriptionStyle>
        <div>
          {description}
        </div>
        </DescriptionStyle>
        <ProductCardFrame />
        </ProductBox>
    </div>)
    };
    

const NameStyle = styled.div`
    padding: 12px 0 12px;

    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;

    letter-spacing: -0.01em;

    color: #000000;  
`;

const DescriptionStyle = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    letter-spacing: -0.01em;

    color: #000000;  
`;

const PictureStyle = styled.img`
    width: 341px;
    height: 204px;
    object-fit: cover;
`;

const ProductCardFrame = styled.div`
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

background: #FFFFFF;
`;

const ProductBox = styled.div`
width: 343px;
height: 296px;
left: 24px;
top: 269px;
padding: 37px 24px;
`;
export default ProductCard;