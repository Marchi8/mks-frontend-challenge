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
    // left: 156px;
    // transform: translateX(-100px);
    // transition: all 500ms ease-in-out;
    
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
        background-color: black;
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
    justify-content: center;
    align-items: center;

    @media(min-width:1000px) {
        width: 379px;
        height: 95px;
        flex-direction: row;
        margin-bottom: 28px;
    }

    // div{
    //     background-color: red;
    //     width: auto;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     margin-top: 0px;
    //     margin-left: 0px;
    //     gap: 0px;
    // }

    img{
        width: 80px;
        height: 95px;
    }
`

export { CartStyle, CartProduct }