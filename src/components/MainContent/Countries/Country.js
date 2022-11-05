import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext/themeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Country(props) {
  const { country } = props;

  const themeContext = useContext(ThemeContext);
  return (
    <Link to={`/country/${country.name}`}>
      <CountryCard className={themeContext.theme}>
        <div className="flag">
          <img src={country.flag} alt="" />
        </div>

        <CountryInfo>
          <h3>{country.name}</h3>
          <div>
            Population:
            <span>{country.population}</span>
          </div>
          <div>
            Region:
            <span>{country.region}</span>
          </div>
          <div>
            Capital:
            <span>{country.capital}</span>
          </div>
        </CountryInfo>
      </CountryCard>
    </Link>
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
      margin-left: 4px;
    }
  }
`;
