import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext/themeContext";
import CountryInfo from "./CountryInfo";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName } from "../../Store/Actions/contriesActions";
import Loading from "../../Loading/Loading";

function CountryDetail(props) {
  const themeContext = useContext(ThemeContext);
  const slug = useParams();
  //console.log(slug.countryName); get ra Name quốc gia
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const country = useSelector((state) => state.Countries.country);
  const loading = useSelector((state) => state.Countries.loading);

  useEffect(() => {
    dispatch(getCountryByName(slug.countryName));
  }, [slug.countryName, dispatch]); //get ra thông tin của quốc gia

  return (
    <Wrapper>
      <div
        className={`goback-btn ${themeContext.theme}`}
        onClick={() => navigate(-1)} //router v6
      >
        Trở về
      </div>

      {loading ? (
        <Loading />
      ) : (
        <CountryContainer>
          <div className="flagCountry">
            <img
              src={
                country
                  ? country.flag
                  : "https://via.placeholder.com/300x200?text=Image+Error"
              }
              alt={country ? country.name : ""}
            />
            .
          </div>
          <CountryInfo />
        </CountryContainer>
      )}
    </Wrapper>
  );
}

export default CountryDetail;

const Wrapper = styled.div`
  padding-top: 20px;
  .goback-btn {
    display: block;
    width: 80px;
    height: 28px;
    line-height: 28px;
    padding: 2px 4px;
    border-radius: 4px;
    text-align: center;
    font-weight: 500;
    filter: brightness(0.9);
    transition: all 0.2s linear;

    &:hover {
      filter: brightness(1);
      font-weight: bold;
      cursor: pointer;
      use-select: none;
    }
  }
`;

const CountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }

  .flagCountry {
    max-width: 400px;
    width: 100%;
    height: 100%;
    margin-bottom: 12px;
    box-shadow: var(--BoxShadow);
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
