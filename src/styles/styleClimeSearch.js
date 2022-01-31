import styled from 'styled-components'

export const ContainClimeSearch = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 100%;
    background-color:rgb(30,33,58);
    padding:15px 0 30px 0;
    z-index: 1;
    @media (min-width: 768px) {
        justify-content:space-around;
    }
`

export const ContainButtons = styled.div`
    display:flex;
    justify-content:space-between;
    width: calc(100% - 20px);
    height: 60px;
    button{
        background:#747d8c;
        display:block;
        color:white;
        border:none;
        outline: none;
        cursor: pointer;
    }
`

export const ButtonSearch = styled.button`
    height:35px;
    font-size:18px;
    padding:20px 15px;
    line-height:0;
`

export const Pointer = styled.button`
    width:40px;
    height: 40px;
    border-radius:50%;
    display:grid;
    place-content: center;
`

export const ContainImgClime = styled.div`
    display:grid;
    background: url(${`../weather-api-Dani7uG/Cloud-background.png`});
    background-position:50% 50%;
    place-content: center;
    width:100%;
    height: 220px;
    padding:30px 0;
    margin:20px 0;
    img{
        width: 130px;
    }
`

export const ContainDegrees = styled.div`
    display:flex;
    align-items: center;
    p,b{
        color:white;
        margin:0;
    }
    p{
        font-size:100px;
        font-weight: 700;
    }
    b{
        font-size:40px;
        padding-top:20px;
        font-weight: 300;
    }
    @media (min-width: 768px){
        p{
            font-size:140px;
        }
    }
`

export const WeatherState = styled.h3`
    font-size:30px;
    color:#fff;
    font-weight: 400;
    margin:0;
`

export const Time = styled.p`
    color:#747d8c;
    font-size:20px;
    font-weight: bold;
    margin:0;
    span{
        margin:0 10px;
    }
`


export const Country = styled.p`
    display:flex;
    align-items: center;
    color:#747d8c;
    font-size:25px;
    font-weight: bold;
    img{
        width:25px;
        height:25px;
        margin:0 10px;
    }
`

export const ContainSearch = styled.div`
    display: flex;
    width: 100%;
    padding-top:30px;
    z-index:1;
    position: relative;
    height: 625px;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
        height:calc(100vh - 75px);
    }
`

export const ContainInputSearch = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    input,button{
        outline: none;
        border:none;
        margin:0 10px;
        height: 50px;
    }
    input{
        background-color:transparent;
        border:1px solid #fff;
        padding:0;
        padding-left:30px;
        font-size:18px;
        color:#fff;
    }
    button{
        width: 100px;
        background-color:#5352ed;
        color:#fff;
        font-size:18px;
        cursor: pointer;
    }
`


export const ContainItemsSearch = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:40px;
    width: 100%;
    button{
        margin:20px;
        width:calc(100% - 40px);
        height:60px;
        background-color:transparent;
        border:none;
        outline:none;
        color:#fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:20px;
        transition: all .1s linear;
        cursor:pointer;
    }
    button:hover{
        outline:1px solid #bbb;
    }
    img{
        width:10px;
    }
`

export const Close = styled.img`
    width: 15px;
    position: absolute;
    right:10px;
    top:-2px;
    z-index: 2;
`