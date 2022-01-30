import styled from 'styled-components'

export const ContainClimeSearch = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color:#2c3e50;
    padding:15px 0 30px 0;
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
    background: url(${`../Cloud-background.png`});
    background-position:50% 50%;
    place-content: center;
    width:100%;
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