import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext/themeContext";
import { useContext } from "react";

function Country() {
  const themeContext = useContext(ThemeContext);
  return (
    <CountryCard className={themeContext.theme}>
      <div className="flag">
        <img
          src="http://images5.fanpop.com/image/photos/25700000/vietnamese-flag-vietnamese-places_mina_kimngan-25790392-1024-768.jpg"
          alt=""
        />
      </div>

      <CountryInfo>
        <h3>Afghannistan</h3>
        <div>
          Population:
          <span>123.456.789</span>
        </div>
        <div>
          Region:
          <span>Asia</span>
        </div>
        <div>
          Capital:
          <span>Kabul</span>
        </div>
      </CountryInfo>
    </CountryCard>
  );
}

export default Country;

const CountryCard = styled.div`
  max-width: 420px;
  width: 100%;
  filter: brightness(1);
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 12px;
  use-select: none;
  &:hove {
    filter: brightness(0, 9);
  }
  &:hover img {
    transform: scale(1.1);
  }
  .flag {
    width: 100%;
    height: 160px;
    display: block;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.2s linear;
    }
  }
`;

const CountryInfo = styled.div`
  padding: 10px 16px;
  h3 {
    margin: 16px 0;
    font-size: 20px;
    font-weight: bold;
    height: 50px;
  }

  div {
    display: block;
    font-size: 16px;
    font-weight: 700;
    margin: 4px 0;
    span {
      font-weight: 400;
    }
  }
`;
