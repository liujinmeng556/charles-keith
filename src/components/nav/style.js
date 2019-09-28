import styled from "styled-components";

export const NavWrapper = styled.div`
  
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
  .nav>ul .cool{
  color:#ce787c;
}


`