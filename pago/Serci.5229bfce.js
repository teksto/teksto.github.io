import{r as n,b as r,c as s,t as o}from"./index.04b85f1b.js";const c={id:"Serci"},u="DzTangut.json",i={__name:"Serci",setup(l){let a=n();return fetch("db/"+u).then(t=>t.json().then(e=>a.value=e.tangut)),n(null),(t,e)=>(r(),s("h1",c,"SERCI "+o(t.$route.params.q),1))}};export{i as default};