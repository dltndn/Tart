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
  const [menuNum, setMenuNum] = useState(1);

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

  const onClickMenuButton = (num) => {
    setMenuNum(num);
  };

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
          <MenuTab
            onClickMenuButton = {onClickMenuButton}
          />
          <>
            {menuNum === 1 && (
              <ProductDetailPicture
                src={
                  "https://s3-alpha-sig.figma.com/img/c5a8/8a6e/631bf5d8910e14d240707cfe44bad95a?Expires=1658102400&Signature=ZrvfvfYDQECQ-XMgBt~L4EKd2fyj9KSnXau6xQyyHc~W6-5p8gwjLLi7rmS8C-oqVwTSCJJwMP~KCC1ma-xpqeHLltyeDPOCp56a4588eB5nyXpjAppo6crocsDQXZbtg-EpDqLv7ykCxXdFpkqAb6F9J6ivBZeO22NqMR-KGkt-IXJB4qPF~2I1s1HpkJCpLo0MrlneKhWsahOjAtCQY7UfjM1QcOMjB51iaiUt5Eq~dj4cVvjSqHHGeONQmAKoIdEonsDLKOl1gxxbtufamiHZi7rrGIQiVgwOe~Of8~Nk9j1EdXfuwrHX6le-7I4Xn0Z-42qznIRReTA5DgRYZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                }
                alt={"상품 상세 설명"}
              />
            )}
            {menuNum === 2 && (
              <ProductReviewSection>
                <ProductReviewPicture
                  src={
                    "https://s3-alpha-sig.figma.com/img/847a/971f/f22af1e850106a1f25d1990d35c4876b?Expires=1658102400&Signature=djY0tlxUFZrKk4uwisxVEoL3I8-MGjLXC-e~5H9p~LrwHhD3cqyYyHv6r~cNyKESrcP1Alr~pOv99oBEHrdgusmzTFHTdqtrqkdzZf5sWmdKeFJjvtpERyG71WHtUZR~lUkMJRWL8UeiRyvvy6iMWjUL7KmhYeyGUqHiY4ZVEAAhWI0c0Cd22GJ1WSaWl6Sq5ccRf~5PvJzJUzR19kVvS38D4ygEz~M~U9ewSrZCtnTvdGugn6mqofOoH17OpqEcoL8bWKL1jKIkS9aiH-mxMuo7Knx8yj7YrZ-8XaLQ745pVw3cMVweFJnOyvDLYQp9RkoTZJudUenf1u9Tb92e2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  }
                  alt={"상품 후기 1"}
                ></ProductReviewPicture>
                <ProductReviewPicture
                  src={
                    "https://s3-alpha-sig.figma.com/img/63c9/7204/04a657206fbe2b4c3b3bbf4607901106?Expires=1658102400&Signature=apJKbuoCJz-ChB3iwpUMgWcN6RYqvEWyvlQO9zQgJye90L-AVJ1RI~nvje50fr2iVgPGs-nsaD4K-qRU5qMpNdXXeq0tRNtHM4BvRVoqkMPxpiDkbfOYj4Nz~U8mdkd5H-uvN39OJAiThwFebyWx091fN3fyjwe7mUZgaw8mUiurddwdHg3eGZM-jJYoBMdmGJegu0CEGhklfQGw7qPZP4yNZTSQqUym93jnYzfaMRmstTI0XJXo2lwFrfmizTUZ6LpXL44X3dHjYmmvmquZjE40Gk5wJ~3sgEdyQxHD9LyV5hwwT7WBk6dua9710alV2W6yE3XvtesYnu0JPLdoZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  }
                  alt={"상품 후기 2"}
                ></ProductReviewPicture>
                <ProductReviewPicture
                  src={
                    "https://s3-alpha-sig.figma.com/img/63c9/7204/04a657206fbe2b4c3b3bbf4607901106?Expires=1658102400&Signature=apJKbuoCJz-ChB3iwpUMgWcN6RYqvEWyvlQO9zQgJye90L-AVJ1RI~nvje50fr2iVgPGs-nsaD4K-qRU5qMpNdXXeq0tRNtHM4BvRVoqkMPxpiDkbfOYj4Nz~U8mdkd5H-uvN39OJAiThwFebyWx091fN3fyjwe7mUZgaw8mUiurddwdHg3eGZM-jJYoBMdmGJegu0CEGhklfQGw7qPZP4yNZTSQqUym93jnYzfaMRmstTI0XJXo2lwFrfmizTUZ6LpXL44X3dHjYmmvmquZjE40Gk5wJ~3sgEdyQxHD9LyV5hwwT7WBk6dua9710alV2W6yE3XvtesYnu0JPLdoZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  }
                  alt={"상품 후기 3"}
                ></ProductReviewPicture>
              </ProductReviewSection>
            )}
          </>
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

const ProductReviewSection = styled.div`
  position: absolute;
  width: 342px;
  height: 1188.21px;
  left: 24px;
  top: 659px;

  display: flex;
  flex-direction: column;
`;

const ProductReviewPicture = styled.img`
  width: 341px;
  height: 84px;
`;

export default ProductDetail;
