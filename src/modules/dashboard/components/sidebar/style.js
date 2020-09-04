import styled from 'styled-components';

export const StyledSidebar = styled.div`{
  .menubtn{
  color: #98a6ad;
  text-decoration : none;
  display:block;
  }
  .menubtn:active, .menubtn:focus, .menubtn:hover {
    color: #a8bcd2 !important;
    text-decoration: none;
    transition: all 0.3s;
}
.active span{
  -ms-transform: rotate(90deg); 
  transform: rotate(90deg);
  transition: all 0.6s;
  font-size:13px;
}
.disabled span{
  -ms-transform: rotate(0deg); 
  transform: rotate(0deg);
  transition: all 0.6s;
  font-size:13px;
}
.disabled + div {
  max-height:0;
  transition: all 0.4s;
  overflow: hidden;
}
.active + div {
  max-height:400px;
  transition: all 0.8s;
}
.removeWidth {  
  width:70px !important;
  img{
    width:40px;
  }
.textwrap{
  display:none;
}
.active {
  position:relative;
}
.textwrap + span{
  display:none;
}
.active + div{
display:none;
}
}

 }`;