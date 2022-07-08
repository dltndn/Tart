import styled from "styled-components";
import Navigation from "../components/Navigation";
import ProductImg from "../utils/ProductImg";
import ProductName from "../components/ProductName";
import ProductCost from "../components/ProductCost";
import MenuTab from "../components/ProductMenuTab";
import BottomBtn from "../components/BottomBtn";
import BackIcon from "../components/BackIcon";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mockTheme1Produdcts, mockTheme2Produdcts } from "../data/mockData";

const ProductDetail = () => {
  
  let { productId } = useParams();
  productId = Number(productId);
  mockTheme1Produdcts.map((prod) => prod.id === productId ? console.log(prod): console.log("아님"));
  

  const navigate = useNavigate();

  return (
    <div>
      <PageStyle>
        <BackIcon onClick={() => navigate("/")}/>
        <Navigation />
        <ProductImg
          thumbnail={
            "https://s3-alpha-sig.figma.com/img/76a2/6c6b/a203d0d524baeae061f5a0d82b1e82e3?Expires=1658102400&Signature=fHJv9FMRxpk7wDTgCOLNLUOvoEyT2z6YeBkXP33K6YbGqXpb8JV1vsWmKwIlkTaWxqF31-hH-c2lLT8-vLv1Cs1GfP0UU2tccZswvkSEAw7qV8IEkUlNxAK5W8MwcOYEMJ58Lu9baZz3m-1Njl8SF8Zxier7z35~vjAtn5lHI2Fvy93q16Yu2JlbajtEiLpnL-zPdWySS6Ve4I56qwBes-VogIx4yNuL6GHOaDZBUtzu-a9sGdbqdGNCQ4ocRB8oQMxa3HnnNdJXlE4pFwesBs5XY9ud6p4B9Ocb0BPPwpn1MnCha6nQHUoPS4geojoLIGk7GzUiR3hRNc9zu~zdow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          }
          name={"비숑 블랙 머그잔"}
        ></ProductImg>
        <ProductName name={"비숑 블랙 머그잔"} />
        <ProductCost cost={"21,800원"} />
        <MenuTab />
        <ProductDetailPicture
          src={
            "https://s3-alpha-sig.figma.com/img/c5a8/8a6e/631bf5d8910e14d240707cfe44bad95a?Expires=1658102400&Signature=ZrvfvfYDQECQ-XMgBt~L4EKd2fyj9KSnXau6xQyyHc~W6-5p8gwjLLi7rmS8C-oqVwTSCJJwMP~KCC1ma-xpqeHLltyeDPOCp56a4588eB5nyXpjAppo6crocsDQXZbtg-EpDqLv7ykCxXdFpkqAb6F9J6ivBZeO22NqMR-KGkt-IXJB4qPF~2I1s1HpkJCpLo0MrlneKhWsahOjAtCQY7UfjM1QcOMjB51iaiUt5Eq~dj4cVvjSqHHGeONQmAKoIdEonsDLKOl1gxxbtufamiHZi7rrGIQiVgwOe~Of8~Nk9j1EdXfuwrHX6le-7I4Xn0Z-42qznIRReTA5DgRYZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          }
          alt={"상품 상세 설명"}
        />
        <BottomBtn />
      </PageStyle>
    </div>
  );
};

const PageStyle = styled.div`
  position: relative;
  width: 390px;
  height: 1554px;

  background: #ffffff;
`;

const ProductDetailPicture = styled.img`
  position: absolute;
  width: 342px;
  height: 1188.21px;
  left: 24px;
  top: 659px;
`;

export default ProductDetail;
