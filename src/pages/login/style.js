import styled from "styled-components";

export const LoginNewsWrapper = styled.div`
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
.log{
  margin-top:0.88rem;
  input{
    width:100%;
    height:0.8rem;
    font-size:0.29rem;
    margin-left: 0.3rem;
    border:1px solid #fff;
    outline:none;
  }
}
.log_btn{
  width:100%;
  button{
    width:100%;
    height:0.88rem;
    text-align: center;
    font-size: .29rem;
    border: 1px;
    background: #f3f3f3;
    outline:none;
    cursor:pointer
  }
}
.log_creat{
    display: flex;
    justify-content: space-between;
    div{
      margin:0.2rem;
      font-size:0.28rem;  
      color:#000;
    }
}
.log_login{
  width:100%;
  text-align:center;
  margin-top:2rem;
  div{
    font-size:0.28rem;
  }
  p{
    font-size:0.18rem;
  }
}
`