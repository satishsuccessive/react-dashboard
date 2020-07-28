import styled from 'styled-components';

export const HeaderWrapper = styled.span`{
    .headerWrap {
        background-color: #fff;
        position: fixed;
        display: flex;
        align-items: center;
        left: 0;
        right: 0; 
        height: 70px;
        left:250px;
        top: 0px;
        z-index: 9;
        -webkit-box-shadow: 0 0 35px 0 rgba(61,69,78,.15);
        box-shadow: 0 0 35px 0 rgba(61,69,78,.15)
    }
    .headerWrap > div {
     width:100%;
    }
    .listing {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .listing > li {
        height:70px;
        display:flex;
        align-items:center;
    }
    .listing > li a{
        display:flex;
        align-items:center;
        height:100%;
        font-size:16px;
    }
    .listing > li a:hover{
       background-color:rgba(65,77,95,.05);
    }
    .listing a{
        padding: 0 15px;
    color: #6C757E;
    display: block;
    max-height: 70px;
    text-decoration:none;
    }
    .listing ul {
        position: absolute;
        top:100%;
    background-color: #f9f9f9;
    min-width: 180px;
    border-radius: .25rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    left:10px;
    list-style-type: none;
    padding:10px 0;
    }
    .listing ul a
    {
        font-size:15px;
        display:block;
        color: #212529;
        padding:.45rem 1.2rem;
        font-size:15px;

    }
    .flex{
        display:flex;
    }
    .avtarWrap{
        width:80%;
        input{
            padding:10px 16px 10px;
        }
    }
    .avtarWrap > img{
        display:inline-block;
        padding:20px;
    }
    .avtarWrap > img:hover{
        background-color:rgba(65,77,95,.05);
    }

    .listing.menuSetting{
    position:relative;
    }
    .iconwrap{
        margin-right:1rem;
    }
    .faIcon{
        font-size:18px;
    }
    form {
        display:flex;
    }
 }`;