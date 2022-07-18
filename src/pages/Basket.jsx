import styled from "styled-components";
import Navigation from "../components/Navigation";
import BackIcon from "../components/BackIcon";
import BasketItem from "../components/BasketItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as webStorage from "../utils/webStorage";

const Basket = () => {
  const navigate = useNavigate();

  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);

  // Basket이 렌더링 될때, 한번만 실행되는 로직
  useEffect(() => {
    const items = webStorage.getBasketItems();
    setBasketItems(items);
    setBasketItemCount(items.length);
  }, []);

  // [장바구니 상품 갯수]가 바뀌면, 실행되는 로직
  useEffect(() => {
    const items = webStorage.getBasketItems();
    setBasketItems(items);
  }, [basketItemCount]);

  const onClickRemoveButton = (productId) => {
    webStorage.removeBasketItem(productId);
    setBasketItemCount(basketItems.length - 1);
  };

  return (
    <div>
      <PageStyle>
        <BackIcon onClick={() => navigate("/")} />
        <Navigation name={"장바구니"} />
        {basketItems &&
          basketItems.map((product) => (
            <BasketItem
              key={product.id}
              id={product.id}
              thumbnail={product.thumbnail}
              name={product.name}
              price={product.price}
              onClickRemoveButton={() => onClickRemoveButton(product.id)}
            />
          ))}
          <LeftRectangle>
            <FontStyle width={"99px"} color={"#616161"} order={"0"}>상품 금액 (n개)</FontStyle>
            <FontStyle width={"44px"} color={"#616161"} order={"1"}>배송비</FontStyle>
            <FontStyle width={"77px"} color={"#616161"} order={"2"}>총 결제금액</FontStyle>
          </LeftRectangle>
          <RightRectangle>
            <FontStyle width={"63px"} color={"rgba(0, 0, 0, 0.86)"} order={"0"}>47,000 원</FontStyle>
            <FontStyle width={"55px"} color={"rgba(0, 0, 0, 0.86)"} order={"1"}>3,000 원</FontStyle>
            <FontStyle width={"64px"} color={"rgba(0, 0, 0, 0.86)"} order={"2"}>50,000 원</FontStyle>
          </RightRectangle>
      </PageStyle>
    </div>
  );
};

const PageStyle = styled.div`
  position: relative;
  width: 390px;
  height: 794px;
`;

const LeftRectangle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 99px;
  height: 83px;
  left: 24px;
  top: 617px;
`;

const RightRectangle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 63px;
  height: 83px;
  left: 303px;
  top: 617px;
`;

const FontStyle = styled.div`
  width: ${(props) => props.width};
  height: 21px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;

  letter-spacing: -0.01em;

  color:${(props) => props.color};

  flex: none;
  order: ${(props) => props.order};
  flex-grow: 0;
`;

export default Basket;
