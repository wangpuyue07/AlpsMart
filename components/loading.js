import {Spin} from 'antd';


import styled from "styled-components";


const StyledLoadingPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #5cbad5;
  .ant-spin{
    color:#1f73b7;
    .ant-spin-dot-item{
      background-color: #1f73b7;
    }
  }
`;


export default function Loading({children}) {
    return (
        <StyledLoadingPage><Spin size="large" tip="Loading..." /></StyledLoadingPage>
    )
}
