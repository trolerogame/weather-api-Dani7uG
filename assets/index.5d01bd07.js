var M=Object.defineProperty;var C=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var v=(t,i,r)=>i in t?M(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,m=(t,i)=>{for(var r in i||(i={}))T.call(i,r)&&v(t,r,i[r]);if(C)for(var r of C(i))$.call(i,r)&&v(t,r,i[r]);return t};import{W as D,s as c,j as y,r as f,R as I,a as H}from"./vendor.75a39ec1.js";const P=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}};P();const B=D`
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
`,W=c.div`
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
`,A=c.div`
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
`,L=c.button`
    height:35px;
    font-size:18px;
    padding:20px 15px;
    line-height:0;
`,R=c.button`
    width:40px;
    height: 40px;
    border-radius:50%;
    display:grid;
    place-content: center;
`,O=c.div`
    display:grid;
    background: url(${"../Cloud-background.png"});
    background-position:50% 50%;
    place-content: center;
    width:100%;
    height: 220px;
    padding:30px 0;
    margin:20px 0;
    img{
        width: 130px;
    }
`,N=c.div`
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
`,E=c.h3`
    font-size:30px;
    color:#fff;
    font-weight: 400;
    margin:0;
`,F=c.p`
    color:#747d8c;
    font-size:20px;
    font-weight: bold;
    margin:0;
    span{
        margin:0 10px;
    }
`,_=c.p`
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
`,q=c.div`
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
`,G=c.form`
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
`,K=c.div`
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
`,V=c.img`
    width: 15px;
    position: absolute;
    right:10px;
    top:-2px;
    z-index: 2;
`,j=t=>new Date(t||new Date().toString()).toString().split(" ").slice(0,3).join(" ").replace(" ",", "),e=y.exports.jsx,o=y.exports.jsxs,k=y.exports.Fragment,J=({country:t,setSearch:i,applicable_date:r,the_temp:l,weather_state_name:n})=>{const a=j(r);return o(k,{children:[o(A,{children:[e(L,{onClick:()=>i(!0),children:"Search for places"}),e(R,{children:e("img",{src:"",alt:""})})]}),e(O,{children:e("img",{src:`../${n?n.replaceAll(" ",""):"Clear"}.png`,alt:""})}),o(N,{children:[e("p",{children:Math.ceil(l||0)}),e("b",{children:"\xB0C"})]}),e(E,{children:"Shower"}),o(F,{children:["Today ",e("span",{children:"\u2022"})," ",a]}),o(_,{children:[e("img",{src:"../map-marker-alt-solid.svg",alt:""})," ",t]})]})},b=async t=>await(await fetch(t)).json(),Q=({getClime:t,setSearch:i})=>{const[r,l]=f.exports.useState([]),n=f.exports.useRef(null),a=async s=>{s.preventDefault();const p=await b(`https://www.metaweather.com/api/location/search?query=${n.current.value}`);l(p)},d=s=>{t(s),n.current.value="",l([])};return o(q,{children:[e(V,{src:"../times-solid.svg",alt:"times-solid",onClick:()=>i(!1)}),o(G,{children:[e("input",{type:"text",ref:n,placeholder:"search location"}),e("button",{onClick:a,children:"Search"})]}),e(K,{children:r.map((s,p)=>o("button",{onClick:()=>d(s.woeid),children:[e("p",{children:s.title})," ",e("img",{src:"../angle-right-solid.svg",alt:""})]},p))})]})},U=({getClime:t,country:i,clime:r,search:l,setSearch:n})=>e(W,{children:l?e(Q,{getClime:t,setSearch:n}):e(J,m({setSearch:n,country:i},r))}),X=c.div`
    background-color:rgb(16,14,29);
    padding-top:80px
    ;
    height:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    .flex {
        display:flex;
    }
    .justify-center{
        justify-content: center;
    }
    #containerWidth{
        width:130ch;
        height:auto;
    }
    h3{
        color:#fff;
        padding:20px;
        font-size:30px;

    }
    @media(min-width: 768px) {
        
    }
`,S=c.div`
    display:flex;
    margin:0 20px;
    gap:40px 20px;
    flex-wrap: wrap;
    justify-content:${t=>t.center?"center":"start"};
`,z=c.div`
    width:165px;
    height:225px;
    background-color:rgb(30,33,58);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,u=c(z)`
    max-width:100%;
    width:380px;
    height:auto;
    padding:30px;
`,h=c.p`
    color:#fff;
    font-size:18px;
    margin:0;
    text-align:center;
`,Y=c.img`
    width:100px;
    height:100px;
    padding:10px 0;
    object-fit: contain;
`,Z=c.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:#fff;
    width: 100%;
`,x=c.span`
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
`,ee=c.div`
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
`,te=c.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top:20px;
`,ie=c.div`
    display:flex;
    width: 100%;
    margin:0 20px;
    justify-content: space-between;
    span{
        color:#fff;
    }
`,ne=c.div`
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
`,oe=({climes:t})=>e(S,{center:!0,children:t.slice(1,t.length).map((i,r)=>o(z,{children:[e(h,{children:r==0?"Tomorrow":j(i.applicable_date)}),e(Y,{src:`../${i.weather_state_name.replaceAll(" ","")}.png`,alt:""}),o(Z,{children:[o("p",{children:[Math.ceil(i.max_temp),"\xB0C"]}),o("b",{children:[Math.ceil(i.min_temp),"\xB0C"]})]})]},r))}),re=({wind_direction_compass:t,wind_direction:i,humidity:r,visibility:l,air_pressure:n})=>o(S,{center:!0,children:[o(u,{children:[e(h,{children:"Wind status"}),o(x,{children:[Math.ceil(i)," ",e("p",{children:"mph"})]}),o(ee,{deg:Math.ceil(i),children:[e("div",{children:e("img",{src:"../location-arrow-solid.svg",alt:""})}),e(h,{children:t})]})]}),o(u,{children:[e(h,{children:"Humidity"}),o(x,{children:[r," ",e("p",{children:"%"})]}),o(te,{children:[o(ie,{children:[e("span",{children:"0"}),e("span",{children:"50"}),e("span",{children:"100"})]}),e(ne,{porcentage:r})]})]}),o(u,{children:[e(h,{children:"Visibility"}),o(x,{children:[Math.ceil(l)," ",e("p",{children:"miles"})]})]}),o(u,{children:[e(h,{children:"Air Pressure"}),o(x,{children:[Math.ceil(n)," ",e("p",{children:"mb"})]})]})]}),ce=({climes:t})=>o(X,{children:[e("div",{className:"flex justify-center",children:e(oe,{climes:t})}),e("h3",{children:"Today's Hightlights"}),e(re,m({},t[0])),o(h,{style:{marginTop:40,marginBottom:10},children:["created by ",e("b",{children:"Dani7uG"})," - devChallenges.io"]})]}),ae=()=>{const[t,i]=f.exports.useState([]),[r,l]=f.exports.useState(""),[n,a]=f.exports.useState(!1),d=async(s,p,g)=>{!s&&p&&g&&(s=(await b(`https://www.metaweather.com/api/location/search?lattlong=${p},${g}`))[0].woeid);const w=await b(`https://www.metaweather.com/api/location/${s||44418}`);l(w.title),i(w.consolidated_weather)};return f.exports.useEffect(()=>{if("geolocation"in navigator)return navigator.geolocation.getCurrentPosition(s=>{const{latitude:p,longitude:g}=s.coords;d(null,p,g)});d()},[]),o(k,{children:[e(B,{}),e(U,{getClime:d,country:r,clime:t[0],search:n,setSearch:a}),e(ce,{climes:t})]})};I.render(e(H.StrictMode,{children:e(ae,{})}),document.getElementById("root"));
