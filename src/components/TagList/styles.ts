import styled from "styled-components";

export const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1875rem 0.625rem;
  width: 3.875rem;
  background: #f3f3ff;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.875rem;
  height: fit-content;
  width: fit-content;
  color: #5a5a89;
  &:not(last-child) {
    margin-left: 0.625rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-bottom: 0.875rem; */
`;
