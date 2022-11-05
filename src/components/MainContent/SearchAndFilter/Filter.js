import React, { useContext, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext/themeContext";
import Options from "./Options";

function Filter(props) {
  const themeContext = useContext(ThemeContext);

  const refSelect = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState(false);

  const { regionName } = useParams(); //lấy giá trị khi click vào từ App.js
  const [valueOption, setValueOption] = useState("All");

  const handleOptions = (e) => {
    if (refSelect.current)
      setIsShowOptions(refSelect.current.contains(e.target));
    //setIsShowOptions( = true)
  };

  //Cập nhật All, Asia, Europe, lấy từ thành local .. khi ấn vào
  useEffect(() => {
    if (regionName) setValueOption(regionName);
    //nếu regionName có giá trị thì set giá trị theo regionName này luôn
    else setValueOption("All");
  }, [regionName]);

  //   useEffect(() => {
  //     if(regionName) setValueOption(regionName)
  //     else setValueOption('All')
  //   },[regionName])

  //XỬ LÝ true, false hiện ,ẩn
  useEffect(() => {
    if (isShowOptions) {
      //true
      document.addEventListener("click", handleOptions);
      return () => {
        document.removeEventListener("click", handleOptions); //gỡ bỏ sự kiện => false
      };
    }
  }, [isShowOptions]);

  return (
    <FilterPane>
      <h3>Filter by regions</h3>
      <SelectPane>
        <Select
          className={themeContext.theme}
          ref={refSelect}
          onClick={handleOptions}
        >
          <span>{valueOption}</span>
          <FaChevronDown />
        </Select>
        <Options isShowOptions={isShowOptions} />
      </SelectPane>
    </FilterPane>
  );
}

export default Filter;

const FilterPane = styled.div`
  max-width: 160px;
  width: 100%;
  margin-top: 20px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    text-shadow: var(--TextShadow);
  }

  @media only screen and (max-width: 800px) {
    margin-left: 10px;
  }
`;

const SelectPane = styled.div`
  width: 100%;
  margin-top: 8px;
  position: relative;
  // background-color: #ccc;
`;

const Select = styled.div`
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  height: 34px;
  user-select: none;
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;
