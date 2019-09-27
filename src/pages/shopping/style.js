import styled from "styled-components";

export const ShoppingWrapper = styled.div`
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
      font-size:0.45rem;
  }
  
  .nav{
      margin-top:0.88rem;
      width: 100%;
      height: 0.88rem;
      position: fixed;
      background:#fff;
  }
  .nav>ul{
      display:flex;
      border-bottom:1px solid #c3c0c0;
      width:100%;
      height:0.88rem;
      line-height:0.88rem;
      overflow:scroll
  }
  .nav>ul li{
    padding:0px 0.25rem 0px 0.25rem;
    text-align:center;
    font-size:0.25rem;
    color:#757575;

  }
  .active{
    border-bottom:3px solid red;
  }



`