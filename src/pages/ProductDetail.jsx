import styled from "styled-components";
import Navigation from "../components/Navigation";
import ProductImg from "../utils/ProductImg";
import ProductName from "../components/ProductName";
import ProductCost from "../components/ProductCost";
import MenuTab from "../components/ProductMenuTab";

const ProductDetail = () => {
  return (
    <div>
      <PageStyle>
        <Navigation />
        <ProductImg
          thumbnail={
            "https://s3-alpha-sig.figma.com/img/76a2/6c6b/a203d0d524baeae061f5a0d82b1e82e3?Expires=1658102400&Signature=fHJv9FMRxpk7wDTgCOLNLUOvoEyT2z6YeBkXP33K6YbGqXpb8JV1vsWmKwIlkTaWxqF31-hH-c2lLT8-vLv1Cs1GfP0UU2tccZswvkSEAw7qV8IEkUlNxAK5W8MwcOYEMJ58Lu9baZz3m-1Njl8SF8Zxier7z35~vjAtn5lHI2Fvy93q16Yu2JlbajtEiLpnL-zPdWySS6Ve4I56qwBes-VogIx4yNuL6GHOaDZBUtzu-a9sGdbqdGNCQ4ocRB8oQMxa3HnnNdJXlE4pFwesBs5XY9ud6p4B9Ocb0BPPwpn1MnCha6nQHUoPS4geojoLIGk7GzUiR3hRNc9zu~zdow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          }
          name={"비숑 블랙 머그잔"}
        ></ProductImg>
        <ProductName name={"비숑 블랙 머그잔"}/>
        <ProductCost cost={"21,800원"} />
        <MenuTab />
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


export default ProductDetail;
