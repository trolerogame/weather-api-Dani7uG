import styled from 'styled-components'



export const ContainClimesHighlight = styled.div`
    background-color:rgb(16,14,29);
    padding-top:80px;
    .flex {
        display:flex;
    }
    .justify-center{
        justify-content: center;
    }
    #container{
        max-width:120ch;
        position: relative;
        margin: auto;
        height:auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h3{
        color:#fff;
        padding:20px;
        font-size:30px;

    }
`

export const ContainButtonsDeg = styled.div`
    position:absolute;
    right:0px;
    top:-50px;
`

export const ButtonDeg = styled.button`
    width:35px;
    height:35px;
    border-radius:50%;
    font-size:18px;
    text-align:center;
    line-height:20px;
    font-weight:bold;
    margin:0 10px;
    border:none;
    background:${props => props.deg ? '#FFF' : 'rgb(88,86,118)'};
    color:${props => props.deg ? 'rgb(16,14,29)' : '#FFF'};
    cursor:pointer;
`

export const ContainClimes = styled.div`
    display:flex;
    gap:40px 20px;
    flex-wrap: wrap;
    justify-content:${props => props.center ? 'center' : 'start'};
`

export const ContainDataClime = styled.div`
    width:165px;
    height:225px;
    background-color:rgb(30,33,58);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainDataClimeToday = styled(ContainDataClime)`
    max-width:100%;
    width:360px;
    height:auto;
    padding:30px;
    margin:0 10px;
`

export const Text = styled.p`
    color:#fff;
    font-size:18px;
    margin:0;
    text-align:center;
`


export const ImgClime = styled.img`
    width:100px;
    height:100px;
    padding:10px 0;
    object-fit: contain;
`

export const ContainMaxMinTemp = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:#fff;
    width: 100%;
`

export const InfoClimeToday = styled.span`
    display:inline;
    margin-top:10px;
    font-size:50px;
    font-weight:bold;
    color:#fff;
    p{
        display:inline;
        margin:0;
        font-size:30px;
    }
`

export const ContainCompass = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    width: 150px;
    div,p{
        margin:0 -20px;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        padding:8px;
        border-radius:50%;
        background-color:#747d8c;
    }
    img{
        width:10px;
        object-fit: cover;
        transform:${props => `rotate(${props.deg - 40}deg)`};
    }
`

export const ContainHumidity = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top:20px;
`

export const HumidityPercentage = styled.div`
    display:flex;
    width: 100%;
    margin:0 20px;
    justify-content: space-between;
    span{
        color:#fff;
    }
`

export const Humidity = styled.div`
    width: 100%;
    height: 10px;
    margin:8px 20px;
    background:#fff;
    border-radius:30px;
    position:relative;
    z-index: 2;
    &::after{
        display: block;
        content:'%';
        position:absolute;
        right: 0;
        bottom:-25px;
        color:#fff;
    }
    &::before{
        display: block;
        content:'';
        position:absolute;
        border-radius:30px;
        background:#f1c40f;
        top: 0;
        width: ${props => props.porcentage + '%'};
        height: 10px;
    }
`