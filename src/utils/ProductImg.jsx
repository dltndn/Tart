import styled from "styled-components";

const ProductImg = ({name, thumbnail}) => {
    return(
        <div>
            <ImgStyle src={thumbnail} alt={name}>
            </ImgStyle>
        </div>
    );
};

const ImgStyle = styled.img`
    position: absolute;
left: 0%;
right: 0%;
top: 4.05%;
bottom: 68.92%;
`;

export default ProductImg;