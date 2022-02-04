var B=Object.defineProperty;var j=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var k=(t,n,i)=>n in t?B(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,b=(t,n)=>{for(var i in n||(n={}))F.call(n,i)&&k(t,i,n[i]);if(j)for(var i of j(n))T.call(n,i)&&k(t,i,n[i]);return t};import{W as G,s as r,j as w,r as h,R as I,a as H}from"./vendor.75a39ec1.js";const P=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}};P();const A=G`
    body{
        font-family: 'Lato', sans-serif;
        font-family: 'Poppins', sans-serif;
        font-family: 'Rubik', sans-serif;
        font-family: 'Source Sans Pro', sans-serif;
        width: 100%;
        height: 100vh;
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    #root{
        width: 100%;
        height: 100vh;
        display:flex;
        flex-direction: column;
    }
    @media (min-width: 768px) {
        #root{
            display: grid;
            grid-template-columns: 30% 70%;
            grid-template-rows: 1fr;
        }
    }
`,L=r.div`
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
`,R=r.div`
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
`,W=r.button`
    height:35px;
    font-size:18px;
    padding:20px 15px;
    line-height:0;
`,O=r.button`
    width:40px;
    height: 40px;
    border-radius:50%;
    display:grid;
    place-content: center;
`,N=r.div`
    display:grid;
    background: url(${"../weather-api-Dani7uG/Cloud-background.png"});
    background-position:50% 50%;
    place-content: center;
    width:100%;
    height: 220px;
    padding:30px 0;
    margin:20px 0;
    img{
        width: 130px;
    }
`,_=r.div`
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
`,E=r.h3`
    font-size:30px;
    color:#fff;
    font-weight: 400;
    margin:0;
`,q=r.p`
    color:#747d8c;
    font-size:20px;
    font-weight: bold;
    margin:0;
    span{
        margin:0 10px;
    }
`,K=r.p`
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
`,V=r.div`
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
`,J=r.form`
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
`,Q=r.div`
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
`,U=r.img`
    width: 15px;
    position: absolute;
    right:10px;
    top:-2px;
    z-index: 2;
`,S=t=>new Date(t||new Date().toString()).toString().split(" ").slice(0,3).join(" ").replace(" ",", "),e=w.exports.jsx,a=w.exports.jsxs,z=w.exports.Fragment,X=({country:t,setSearch:n,applicable_date:i,the_temp:l,weather_state_name:o,celsius:c})=>{const s=S(i);return a(z,{children:[a(R,{children:[e(W,{onClick:()=>n(!0),children:"Search for places"}),e(O,{children:e("img",{src:"",alt:""})})]}),e(N,{children:e("img",{src:`../weather-api-Dani7uG/${o?o.replaceAll(" ",""):"Clear"}.png`,alt:""})}),a(_,{children:[e("p",{children:Math.ceil(c?l:l*1.8+32)}),e("b",{children:c?"\xB0C":"\xB0F"})]}),e(E,{children:"Shower"}),a(q,{children:["Today ",e("span",{children:"\u2022"})," ",s]}),a(K,{children:[e("img",{src:"../weather-api-Dani7uG/map-marker-alt-solid.svg",alt:""})," ",t]})]})},C=async t=>await(await fetch(t)).json(),Y=({getClime:t,setSearch:n})=>{const[i,l]=h.exports.useState([]),o=h.exports.useRef(null),c=async d=>{d.preventDefault();const p=await C(`https://www.metaweather.com/api/location/search?query=${o.current.value}`);l(p)},s=d=>{t(d),o.current.value="",l([])};return a(V,{children:[e(U,{src:"../weather-api-Dani7uG/times-solid.svg",alt:"times-solid",onClick:()=>n(!1)}),a(J,{children:[e("input",{type:"text",ref:o,placeholder:"search location"}),e("button",{onClick:c,children:"Search"})]}),e(Q,{children:i.map((d,p)=>a("button",{onClick:()=>s(d.woeid),children:[e("p",{children:d.title})," ",e("img",{src:"../weather-api-Dani7uG/angle-right-solid.svg",alt:""})]},p))})]})},Z=({getClime:t,country:n,clime:i,search:l,setSearch:o,celsius:c})=>e(L,{children:l?e(Y,{getClime:t,setSearch:o}):e(X,b({setSearch:o,country:n,celsius:c},i))}),ee=r.div`
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
`,te=r.div`
    position:absolute;
    right:0px;
    top:-50px;
`,D=r.button`
    width:35px;
    height:35px;
    border-radius:50%;
    font-size:18px;
    text-align:center;
    line-height:20px;
    font-weight:bold;
    margin:0 10px;
    border:none;
    background:${t=>t.deg?"#FFF":"rgb(88,86,118)"};
    color:${t=>t.deg?"rgb(16,14,29)":"#FFF"};
    cursor:pointer;
`,$=r.div`
    display:flex;
    gap:40px 20px;
    flex-wrap: wrap;
    justify-content:${t=>t.center?"center":"start"};
`,M=r.div`
    width:165px;
    height:225px;
    background-color:rgb(30,33,58);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,m=r(M)`
    max-width:100%;
    width:360px;
    height:auto;
    padding:30px;
    margin:0 10px;
`,g=r.p`
    color:#fff;
    font-size:18px;
    margin:0;
    text-align:center;
`,ie=r.img`
    width:100px;
    height:100px;
    padding:10px 0;
    object-fit: contain;
`,ne=r.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:#fff;
    width: 100%;
`,y=r.span`
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
`,oe=r.div`
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
        transform:${t=>`rotate(${t.deg-40}deg)`};
    }
`,re=r.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top:20px;
`,ae=r.div`
    display:flex;
    width: 100%;
    margin:0 20px;
    justify-content: space-between;
    span{
        color:#fff;
    }
`,ce=r.div`
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
        width: ${t=>t.porcentage+"%"};
        height: 10px;
    }
`,le=({climes:t,celsius:n})=>e($,{center:!0,children:t.slice(1,t.length).map((i,l)=>a(M,{children:[e(g,{children:l==0?"Tomorrow":S(i.applicable_date)}),e(ie,{src:`../weather-api-Dani7uG/${i.weather_state_name.replaceAll(" ","")}.png`,alt:""}),a(ne,{children:[e("p",{children:n?`${Math.ceil(i.max_temp)}\xB0C`:`${Math.ceil(i.max_temp*1.8+32)}\xB0F`}),e("b",{children:n?`${Math.ceil(i.min_temp)}\xB0C`:`${Math.ceil(i.min_temp*1.8+32)}\xB0F`})]})]},l))}),se=({wind_direction_compass:t,wind_direction:n,humidity:i,visibility:l,air_pressure:o})=>a($,{center:!0,children:[a(m,{children:[e(g,{children:"Wind status"}),a(y,{children:[Math.ceil(n)," ",e("p",{children:"mph"})]}),a(oe,{deg:Math.ceil(n),children:[e("div",{children:e("img",{src:"../weather-api-Dani7uG/location-arrow-solid.svg",alt:""})}),e(g,{children:t})]})]}),a(m,{children:[e(g,{children:"Humidity"}),a(y,{children:[i," ",e("p",{children:"%"})]}),a(re,{children:[a(ae,{children:[e("span",{children:"0"}),e("span",{children:"50"}),e("span",{children:"100"})]}),e(ce,{porcentage:i})]})]}),a(m,{children:[e(g,{children:"Visibility"}),a(y,{children:[Math.ceil(l)," ",e("p",{children:"miles"})]})]}),a(m,{children:[e(g,{children:"Air Pressure"}),a(y,{children:[Math.ceil(o)," ",e("p",{children:"mb"})]})]})]}),de=({climes:t,setCelsius:n,celsius:i})=>e(ee,{children:a("div",{id:"container",children:[a(te,{children:[e(D,{deg:i===!0,onClick:()=>n(!0),children:"\xB0C"}),e(D,{deg:i===!1,onClick:()=>n(!1),children:"\xB0F"})]}),e("div",{className:"flex justify-center",children:e(le,{climes:t,celsius:i})}),e("h3",{children:"Today's Hightlights"}),e(se,b({},t[0])),a(g,{style:{marginTop:40,marginBottom:10},children:["created by ",e("b",{children:"Dani7uG"})," - devChallenges.io"]})]})}),pe=()=>{const[t,n]=h.exports.useState([]),[i,l]=h.exports.useState(""),[o,c]=h.exports.useState(!1),[s,d]=h.exports.useState(!0),p=async(f,u,x)=>{!f&&u&&x&&(f=(await C(`https://www.metaweather.com/api/location/search?lattlong=${u},${x}`))[0].woeid);const v=await C(`https://www.metaweather.com/api/location/${f||44418}`);l(v.title),n(v.consolidated_weather)};return h.exports.useEffect(()=>{if("geolocation"in navigator)return navigator.geolocation.getCurrentPosition(f=>{const{latitude:u,longitude:x}=f.coords;p(null,u,x)});p()},[]),a(z,{children:[e(A,{}),e(Z,{getClime:p,country:i,clime:t[0],search:o,setSearch:c,celsius:s}),e(de,{climes:t,celsius:s,setCelsius:d})]})};I.render(e(H.StrictMode,{children:e(pe,{})}),document.getElementById("root"));
