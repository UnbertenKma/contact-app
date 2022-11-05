import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Option(props) {
  const { region } = props;
  //console.log(props);

  const navigate = useNavigate(); //đẩy gía trị lên thanh host

  const handleValueOption = () => {
    //log(region.value) nhận đc : Africa. asia
    if (region.value !== "All") navigate(`/region/${region.value}`);
    else navigate(`/`);
    //nếu giá trị value mà khác All thì ... push navigate (/region/...)
    //ngược lại thì đưa về trang chủ
  };

  return (
    <OptionItem onClick={handleValueOption}>
      <region.icon />
      <span>{region.value}</span>
    </OptionItem>
  );
}

export default Option;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 8px;
  &:hover {
    background: var(--SelectOptionBackground);
    font-weight: bold;
  }
  div {
    margin-left: 4px;
  }
`;
