import styled from "styled-components";
import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import {mockTheme1Produdcts, mockTheme2Produdcts} from '../data/mockData';
import { useState } from "react"

const Home = () => {

  const [products, setProducts] = useState();

  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Produdcts);
    } else if (themeId === 2) {
      setProducts(mockTheme2Produdcts);
    }
  };
  
  return (
    <div>
      <PageStyle>
        <div>
          <Navigation />
          <ThemeButtonFrame>
            <ThemeButton name={"# 겨울방한템"} orederNum={0} onClick={() => onClickThemeButton(1)}/>
            <ThemeButton name={"# 여름더워요"} orederNum={1} onClick={() => onClickThemeButton(2)}/>
          </ThemeButtonFrame>
          <ThemeButtonLine />
        </div>
        <div style={{ position: "absolute" }}>
            {products ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  thumbnail={product.thumbnail}
                  />
                  ))
            ) : (
              <div>loading ...</div>
            )}
        </div>
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

const ThemeButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 42px 24px 40px;
  gap: 12px;

  width: 302px;
  height: 75px;
  left: 24px;
  top: 0;
`;

const ThemeButtonLine = styled.div`
  width: 390px;
  height: 8px;
  left: 0px;
  top: 221px;

  background: #eeeeee;
`;
export default Home;
