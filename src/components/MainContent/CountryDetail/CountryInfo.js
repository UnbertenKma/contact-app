import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ScrollBar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";
import styles from "./countryInfoStyles.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { ThemeContext } from "../../ThemeContext/themeContext";

//get các quốc gia lân cận
const getLanguages = (country) => {
  let result = "";
  country.languages.forEach((language) => {
    if (result !== "") result = result + "-" + language.name;
    else result += language.name;
  });
  return result;
};

//chuyển code thành Name :
const getCountryNameByCode = async (code) => {
  const result = await axios.get(
    `https://restcountries.com/v2/alpha?codes=${code}`
  );
  return result.data;
};

function CountryInfo(props) {
  const themeContext = useContext(ThemeContext);
  const [countriesBorder, setCountriesBorder] = useState([]);
  const country = useSelector((state) => state.Countries.country); //lấy dữ liệu

  //chuyển code thành file
  useEffect(() => {
    if (country && country.borders) {
      getCountryNameByCode(country.borders)
        .then((res) => {
          const countryName = res.map((country) => country.name);
          setCountriesBorder(countryName);
        })
        .catch((err) => console.log(err));
    }
  }, [country]);

  return (
    <ScrollBar style={{ maxHeight: "70vh", overflow: "hidden" }}>
      <div className={styles.countryInfo}>
        {country && ( //nếu country có giá trị
          <>
            <h3 className={styles.countryName}>{country.name}</h3>
            <table>
              <tbody>
                <tr>
                  <td className={styles.countryInfo__title}>Native Name</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {country.nativeName}
                  </td>
                </tr>

                <tr>
                  <td className={styles.countryInfo__title}>Official</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {country.altSpellings}
                  </td>
                </tr>

                <tr>
                  <td className={styles.countryInfo__title}>Population</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {new Intl.NumberFormat().format(country.population)}
                  </td>
                </tr>

                <tr>
                  <td className={styles.countryInfo__title}>Region</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {country.region}
                  </td>
                </tr>

                <tr>
                  <td className={styles.countryInfo__title}>Sub Region</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {country.subregion}
                  </td>
                </tr>

                <tr>
                  <td className={styles.countryInfo__title}>Capital</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {country.capial}
                  </td>
                </tr>

                <tr>
                  <td className={styles.countryInfo__title}>
                    Top Level Domain
                  </td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {country.topLevelDomain}
                  </td>
                </tr>

                <tr>
                  <td className={styles.countryInfo__title}>Currencies</td>
                  <td>:</td>
                  <td
                    className={styles.countryInfo__value}
                  >{`${country.currencies[0].code} - ${country.currencies[0].name}`}</td>
                </tr>

                <tr>
                  <td className={styles.countryInfo__title}>Languages</td>
                  <td>:</td>
                  <td className={styles.countryInfo__value}>
                    {getLanguages(country)}
                  </td>
                </tr>

                <tr>
                  <td className={styles.countryInfo__title}>
                    Border Countries
                  </td>
                  <td>:</td>
                  <td className={styles.borderList}>
                    {countriesBorder.length > 0 &&
                      countriesBorder.map((country) => (
                        <Link to={`/country/${country}`} key={country}>
                          <div
                            className={clsx(
                              styles.borderItem,
                              themeContext.theme
                            )}
                          >
                            {country}
                          </div>
                        </Link>
                      ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </ScrollBar>
  );
}

export default CountryInfo;
