import styled from "styled-components";

export const BagsWrapper = styled.div`
    .header{
    display: flex;
    align-items: center;
    height: 0.88rem;
    background: #f9f9f9;
    color: #494949;
    position: fixed;
    top:0;
    width: 100%;
  }
  .header_left{
      width:1.4rem;
  }
  .header_center{
      width:4.3rem;
      text-align:center;
  }
  .header_right{
      width:1.4rem;
      text-align:right;
  }
  .iconfont{
    margin-left:0.2rem;
      font-size:0.35rem;
  }
.bag{
    margin-top:1.88rem;
    text-align:center;
    .iconfont{
        font-size:0.4rem;
        color:#bcbcbc
    }
    .bag_no{
        padding:0.2rem;
        font-size:0.3rem;
    }
    p{
        margin:0 auto;
        border:1px solid #bcbcbc;
        width:2rem;
        height:0.6rem;
        line-height:0.6rem;
    }
}


`