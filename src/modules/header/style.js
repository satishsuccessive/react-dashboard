import styled from 'styled-components';

export const StyledHeader = styled.div`{
    >div{
        top: 0px;
        height:70px;
        > div {
            height:100%;
        }
    }
    input{
        padding-left: 20px;
        height: 38px;
        border: none;
        width: 100px;
        &:focus{
            outline: none;
        }
    }
    .avtar{
        > div {
         padding:0;
         display:flex;
        }
    }
    .form-control:focus {
        color: #495057;
        background-color: #f1f5f7;
        border-color: transparent;
        outline: 0;
        box-shadow: none;
    }
    .search button {
        padding: 9px 15px;
    }
    .listing{
        list-style-type:none;
        margin-bottom:0;
        li{
            a{
            text-decoration: none;
            color: #7c7a7a;
            font-size:15px;
            }
        }
    }
 }`;