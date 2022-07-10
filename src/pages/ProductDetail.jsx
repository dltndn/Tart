import styled from "styled-components";
import Navigation from "../components/Navigation";
import ProductImg from "../utils/ProductImg";
import ProductName from "../components/ProductName";
import ProductCost from "../components/ProductCost";
import MenuTab from "../components/ProductMenuTab";
import BottomBtn from "../components/BottomBtn";
import BackIcon from "../components/BackIcon";
import { useNavigate, useParams } from "react-router-dom";
import { mockTheme1Produdcts, mockTheme2Produdcts } from "../data/mockData";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  let { productId } = useParams();
  productId = Number(productId);
  const [product, setProduct] = useState();

  function getProductData(productId) {
    let productData;
    for (let i = 0; i < mockTheme1Produdcts.length; i++) {
      if (mockTheme1Produdcts[i].id === productId) {
        productData = mockTheme1Produdcts[i];
        break;
      }
      for (let j = 0; j < mockTheme2Produdcts.length; j++) {
        if (mockTheme2Produdcts[j].id === productId) {
          productData = mockTheme2Produdcts[j];
          break;
        }
      }
    }
    return productData;
  }

  useEffect(() => {
    const productData = getProductData(productId);
    setProduct(productData);
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {product && (
        <PageStyle>
          <BackIcon onClick={() => navigate("/")} />
          <Navigation />
          <ProductImg
            thumbnail={product.thumbnail}
            name={product.name}
          ></ProductImg>
          <ProductName name={product.name} />
          <ProductCost cost={product.price} />
          <MenuTab />
          <ProductDetailPicture
            src={
              "https://s3-alpha-sig.figma.com/img/c5a8/8a6e/631bf5d8910e14d240707cfe44bad95a?Expires=1658102400&Signature=ZrvfvfYDQECQ-XMgBt~L4EKd2fyj9KSnXau6xQyyHc~W6-5p8gwjLLi7rmS8C-oqVwTSCJJwMP~KCC1ma-xpqeHLltyeDPOCp56a4588eB5nyXpjAppo6crocsDQXZbtg-EpDqLv7ykCxXdFpkqAb6F9J6ivBZeO22NqMR-KGkt-IXJB4qPF~2I1s1HpkJCpLo0MrlneKhWsahOjAtCQY7UfjM1QcOMjB51iaiUt5Eq~dj4cVvjSqHHGeONQmAKoIdEonsDLKOl1gxxbtufamiHZi7rrGIQiVgwOe~Of8~Nk9j1EdXfuwrHX6le-7I4Xn0Z-42qznIRReTA5DgRYZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
            alt={"상품 상세 설명"}
          />
          <BottomBtn />
        </PageStyle>
      )}
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
