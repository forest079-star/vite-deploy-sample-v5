import{_ as o,c as r,a as c,t as n,b as e,o as i}from"./index-kYMrS_Bq.js";const l={data(){return{data:{}}},mounted(){console.log("這是產品上線的環境變數"),this.axios.get("https://randomuser.me/api/").then(t=>{this.data=t.data.results[0].picture.large})}},d={class:"about"},u=e("h1",null,"This is an about page",-1),_=["src"];function p(a,t,h,m,s,f){return i(),r("div",d,[u,c(" "+n(s.data)+" ",1),e("img",{src:s.data,alt:"",srcset:""},null,8,_)])}const x=o(l,[["render",p]]);export{x as default};
