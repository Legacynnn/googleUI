import styled from "styled-components";

export const Header = styled.header`
  height: 48px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderL = styled.div`
  display: flex;
  align-items: center;

  img {
    padding: 16px 12px;
  }

  .All,
  .Images {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    color: #757575;
    padding: 12px 8px;
  }

  .Images-active{
      color: #4285f4;
      border-bottom: 2px solid #4285f4;
  }
`;

export const HeaderR = styled.div``;

export const Avatar = styled.div``;
