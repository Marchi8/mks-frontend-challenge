import styled from "styled-components";

const ProductsStyle = styled.div`
    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media(min-width:1000px) {
        align-items: center;
        height: 85vh;
    }

    ul{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 99vw;
        overflow-y: auto;
        height: 90vh;
        padding: 18px;
        
        @media(min-width:1000px) {
            padding: 0px;
            width: 999px;
            height: 601px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
        }

        // CONFIGURAÇÃO PARA ESCONDER O SCROLLBAR
        ::-webkit-scrollbar{
            display: none;
        }
    }

    #skelleton{
        background-color: #FFFFFF;
        list-style: none; 
        width: 251px;
        height: 328px;
        margin-bottom: 18px;
        color: #2C2C2C;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
        border-radius: 8px; 
        display: inline-block;
        font-size: 0px;

        @media(min-width:1000px) {
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 0px;
            width: 217.56px;
            height: 285px;
        }
    }

    #skelleton>img{
        width: 180px;
        height: 158.82px;
        margin-top: 20px;
        margin-left: 30px;

        @media(min-width:1000px) {
            width: 150px;
            height: 138px;
            margin-top: 0px;
            margin-bottom: 14px;
        }
    }

    #skelleton>div{
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        gap: 10px;
        margin-left: 12px;

        @media(min-width:1000px) {
            margin-left: 9px;
            gap: 7px;
            margin-bottom: 0px;
        }
    }

    #skelleton>div>h4{
        color: #2C2C2C;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        width: 142.77px;
        height: 43.73px;

        @media(min-width:1000px) {
            width: 131px;
            height: 38px;
        }
    }

    #skelleton>div>span{
        background-color: #373737;
        color: #FFFFFF;
        border-radius: 5px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        width: 73.69px;
        height: 29.92px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media(min-width:1000px) {
            width: 64px;
            height: 26px;
        }
    }

    #skelleton>p{
        color: #2C2C2C;
        width: 221.06px;
        height: 28.77px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        margin-left: 12px;
        margin-bottom: 29px;

        @media(min-width:1000px) {
            width: 192px;
            height: 25px;
            margin-bottom: 38px;
        }
    }

    #skelleton>button{
        background-color: #0F52BA;
        color: #FFFFFF;
        border: 2px solid #0F52BA;
        border-radius: 0px 0px 8px 8px;
        width: 251px;
        height: 36.72px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;

        :hover{
            cursor: pointer;
            background-color: white;
            border: 1px solid white;
            color: #0F52BA;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.135216);
        }

        @media(min-width:1000px) {
            width: 218px;
            height: 31.91px;
        }
    }
`

export { ProductsStyle }