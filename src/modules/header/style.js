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
    .dropBox .dropdown .dropdown-menu.show{
        left: 38px !important;
    }
    .dropBox .dropdown .dropdown-item:last-child{
    border-top:1px solid;
    margin-top:10px;
    }
    .dropBox .dropdown .dropdown-item:first-child{
        background-color: #414d5f;
        padding: 15px 20px;
        margin-top: -.25rem;
        font-size: 0.9rem !important;
        color:#ffffff !important;
        }
 }`;