import styled from "styled-components";
import Select from "react-select";

export const FilterSelect = styled(Select)`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: var(--white);
  border: none;
  outline: none;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.128571;
  }
`;
