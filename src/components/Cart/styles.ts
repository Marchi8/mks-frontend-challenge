import styled from "styled-components";

const CartStyle = styled.aside`
    background-color: #0F52BA;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    z-index: 2;
    width: 310px;
    height: 100%;
    position: fixed;
    right: 0px;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    
    @media(min-width:1000px) {
        width: 486px;
    }

    div{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 25px;
        margin-bottom: 25px;
        margin-left: 20px;
        gap: 50px;

        @media(min-width:1000px) {
            margin-top: 36px;
            gap: 170px;
        }
    }
    
    div>header>p{
        width: 178px;  
        height: 37px;
        font-weight: 700;
        font-size: 27px;
        margin-left: 15px;

        @media(min-width:1000px) {
            margin-left: 30px;
        }

    }

    div>button{
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45.92px;
        height: 45.92px;
        font-weight: 400;
        font-size: 35px;
        border-radius: 50px;
        border: 1px solid black;

        @media(min-width:1000px) {
            width: 38px;
            height: 38px;
            font-size: 25px;
            margin-left: 50px;
        }
    }

    section{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        font-weight: 700;
        font-size: 27px;

        @media(min-width:1000px) {
            font-size: 28px;
        }
    }

    section>main{
        height: 98px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        @media(min-width:1000px) {
            gap: 65px;
        }
    }
    
    section>button{
        background-color: black;
        color: #FFFFFF;
        border: 1px solid black;
        height: 65.86px;
        font-weight: 700;
        font-size: 20px;
        font-family: 'Montserrat';
        font-style: normal;

        @media(min-width:1000px) {
            height: 97px;
            font-size: 28px;
        }
    }

    ul{
        overflow-y: auto;
        padding: 20px;
        height: 75vh;

        ::-webkit-scrollbar-track {
            background: #0F52BA;
        }

        @media(min-width:1000px) {
            height: 80vh;
        }
    }

    button:hover{
        cursor: pointer;
        background-color: white;
        border: 1px solid white;
        color: black;
    }
`
const CartProduct = styled.li`
    list-style: none;
    background-color: #FFFFFF;
    color: #2C2C2C;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    width: 250px;
    height: 220.05px;
    margin-bottom: 13px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media(min-width:1000px) {
        width: 379px;
        height: 95px;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 28px;
    }

    .remove-button{
        background-color: #FFFFFF;
        border: 1px solid #FFFFFF;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        width: 31px;
        height: 41.21px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: -190px;
        margin-bottom: -13px;

        :hover{
            cursor: pointer;
        }

        @media(min-width:1000px) {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            background-color: black;
            color: white;
            border: 1px solid black;
            border-radius: 50px;
            width: 18px;
            height: 18px;
            text-align: center;
            font-size: 12px;
            position: relative;
            left: 335px;
            margin-right: 0px;
            margin-bottom: 0px;
            margin-top: -90px;

            :hover{
                background-color: white;
                color: black;
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.135216);
            }
        }
    }

    img{
        width: 120px;
        height: 95.1px;
        margin-bottom: 20px;

        @media(min-width:1000px) {
            width: 86px;
            height: 57px;
            margin-left: -50px;
            margin-bottom: 0px;
        }
    }

    h4{
        color: #2C2C2C;
        font-weight: 400;
        font-size: 16px;
        margin-bottom: -15px;

        @media(min-width:1000px) {
            width: 113px;
            height: 33px;
            font-size: 13px;
            margin-bottom: 0px;
        }
    }

    aside{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 30px;

        @media(min-width:1000px) {
            gap: 5px;
        }
    }

    aside>div{
        background-color: #FFFFFF;
        width: 97.37px;
        height: 34.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0.1px solid #BFBFBF;
        border-radius: 4px;
        gap: 10px;

        @media(min-width:1000px) {
            gap: 0px;
            color: black;
            width: 50px;
            height: 19px;
            margin-right: 30px; 
            margin-top: 30px; 
            margin-left: 0px; 
        }
    }

    aside>div>p{
        font-weight: 400;
        font-size: 20px;
        margin: 10px;

        @media(min-width:1000px) {
            font-size: 8px;
            margin: 6px;
        }
    }

    .vertical-line{
        background-color: #BFBFBF;
        font-size: 0;
        width: 0.1px;
        height: 25px;
        margin: -7px;
        gap: 10px;

        @media(min-width:1000px) {
            font-size: 0;
            margin: 0px;
            height: 14px;
            width: 1px;
            gap: 0px;
        }
    }

    aside>div>button{
        background-color: #FFFFFF;
        font-weight: 400;
        font-size: 22px;
        color: black;
        width: 30px;
        height: 30px;
        border: 0px solid #BFBFBF;
        border-radius: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        :hover{
            cursor: pointer;
        }

        @media(min-width:1000px) {
            width: 15px;
            height: 17px;
            margin: 0px;
            font-size: 10px;
            
        }
    }

    aside>span{
        background-color: #373737;
        color: #FFFFFF;
        border-radius: 5px;
        width: 84px;
        height: 34.81px;
        margin-right: 23px; 
        font-weight: 700;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media(min-width:1000px) {
            background-color: #FFFFFF;
            color: black;
            width: 62px;
            height: 17px;
            margin-right: 0px; 
            margin-top: 5px; 
        }
    }
`

export { CartStyle, CartProduct }