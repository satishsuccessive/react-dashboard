import styled from 'styled-components';

export const StyledHeader = styled.div`{
    >div{
        top: 0px;
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
    .listing{
        list-style-type:none;
        li{
            a{
            text-decoration: none;
            color: #7c7a7a;
            }
        }
    }
 }`;