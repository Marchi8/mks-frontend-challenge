import styled from "styled-components";

const HeaderStyle = styled.aside`
    background-color: #0F52BA;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 70px;
    z-index: 1;
    
    @media(min-width:1000px) {
        height: 101px;
        justify-content: space-between;
    }

    div{
        display: flex;
        align-items: center;
        gap: 8px;
    }

    h1{
        font-weight: 600;
        font-size: 32px;

        @media(min-width:1000px) {
            font-size: 40px;
            margin-left: 65px;
        }
    }

    p{
        font-weight: 300;
        font-size: 16px;
        margin-top: 4px;

        @media(min-width:1000px) {
            font-size: 20px;
        }
    }

    button{
        background-color:#FFFFFF;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 52px;
        height: 26px;
        border-radius: 8px;
        border: 1px solid #FFFFFF;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        gap: 10px;

        :hover{
            cursor: pointer;
            cursor: pointer;
            background-color: black;
            border: 1px solid black;
            color: white;
        }
        
        @media(min-width:1000px) {
            width: 90px;
            height: 45px;
            font-size: 18px;
            gap: 15px;
            margin-right: 65px;
        }
    }

    span{
        gap: 5px;
    }
`

export { HeaderStyle }