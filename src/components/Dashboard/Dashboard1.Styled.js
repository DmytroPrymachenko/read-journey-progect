import { NavLink } from "react-router-dom";
import styled from "styled-components";

// export const ContentWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   background: #1f1f1f;
//   border-radius: 30px;
//   padding: 20px;
// `;
export const ContentWrap = styled.p``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const FiltersTitle = styled.h3`
  padding-left: 13px;
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #f9f9f9;
`;
export const FiltersInput = styled.input`
  background: #262626;
  border-radius: 12px;
  padding: 14px 14px 14px 77px;
  width: 100%;
  color: #f9f9f9;
  border: none;

  &::placeholder {
    color: #f9f9f9;
  }
  cursor: pointer;
  transition: transform 0.6s ease, border-color 0.6s ease;

  &:hover,
  &:focus {
    border-color: #f4c550;
    outline: none;
  }
`;

// export const FiltersInputWraper = styled.div`
//   position: relative;
// `;
export const FiltersInputSpan = styled.span`
  position: absolute;
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #686868;
  left: 10px;
  top: 15px;
`;
export const FiltersButton = styled.button`
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  background: transparent;

  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: 0.02em;
  color: #f9f9f9;
`;
export const FiltersFormWraper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  flex-direction: column;
  padding-bottom: 20px;
`;
// export const FiltersSpan = styled.span`;
//   padding-left: 13px;

//   font-weight: 500;
//   font-size: 10px;
//   line-height: 120%;
//   letter-spacing: -0.02em;
//   color: #f9f9f9;
// `;
// export const FiltersContentWraper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;
export const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #262626;
  border-radius: 12px;
  align-items: flex-start;
  padding: 20px;
`;
export const WorkoutNamredWraper = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #1f1f1f;
  background: #fff;
  min-width: 40px;
  height: 40px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WorkoutItemContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const WorkoutItemH1 = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #f9f9f9;
`;

export const WorkoutItemSpan = styled.span`
  display: inline;

  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #f9f9f9;
`;

export const WorkoutItemP = styled.p`
  display: inline;
  color: #686868;
`;
export const WorkoutLinkWraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const WorkoutLink = (styled.div = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #686868;
  cursor: pointer;
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }
`);
