(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(9722)}])},9722:function(e,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return j},default:function(){return g}});var s=o(5893),t=(o(9008),o(7283)),a=o(3056),i=o(1644),r=o(636),c=o.n(r),l=(o(5675),function(e){var n=e.name,o=e.types,t=e.src,a=e.abilities,i=e.stats;return(0,s.jsxs)("div",{className:c().card,children:[console.log(i),(0,s.jsx)("div",{className:c().imageSection,children:(0,s.jsx)("img",{lazy:!0,className:c().image,src:t})}),(0,s.jsxs)("div",{className:c().details,children:[(0,s.jsx)("p",{className:c().name,children:n}),(0,s.jsxs)("div",{className:c().typeSection,children:[(0,s.jsx)("p",{className:c().title,children:"Type"}),(0,s.jsx)("p",{className:c().types,children:o.map((function(e,n){return(0,s.jsx)("span",{children:e.pokemon_v2_type.name},n)}))})]}),(0,s.jsxs)("div",{className:c().abilitiesSection,children:[(0,s.jsx)("p",{className:c().title,children:"Abilities"}),(0,s.jsx)("p",{className:c().abilities,children:a.map((function(e,n){return(0,s.jsx)("span",{children:e.pokemon_v2_ability.name},n)}))})]}),(0,s.jsx)("div",{className:c().statsSection,children:i.map((function(e,n){return console.log(e),(0,s.jsxs)("div",{className:c().container,children:[(0,s.jsx)("p",{className:c().subtitle,children:e.pokemon_v2_stat.name}),(0,s.jsx)("div",{className:c().statbar,children:(0,s.jsx)("div",{className:c().statbarStat,style:{width:e.base_stat+"%"}})}),(0,s.jsx)("p",{className:c().name,children:e.base_stat})]},n)}))})]})]})});function m(){var e,n,o=(e=['\n  query pokemon_v2_pokemonspecies($limit: Int, $offset: Int) {\n    pokemon_v2_pokemonspecies(\n      limit: $limit\n      offset: $offset\n      where: { pokemon_v2_generation: { name: { _eq: "generation-i" } } }\n      order_by: { id: asc }\n    ) {\n      name\n      id\n      pokemon_v2_pokemons {\n        pokemon_v2_pokemonabilities {\n          pokemon_v2_ability {\n            name\n          }\n        }\n        pokemon_v2_pokemonstats {\n          pokemon_v2_stat {\n            name\n          }\n          base_stat\n        }\n        pokemon_v2_pokemontypes {\n          pokemon_v2_type {\n            name\n          }\n        }\n      }\n    }\n  }\n'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return m=function(){return o},o}var _=(0,t.Ps)(m()),d={offset:0,limit:3};function p(){var e=(0,a.a)(_,{variables:d,notifyOnNetworkStatusChange:!0}),n=e.loading,o=e.error,t=e.data,r=e.fetchMore,c=e.networkStatus===i.I.fetchMore;if(o)return console.log("error");if(n&&!c)return(0,s.jsx)("div",{children:"Loading"});var m=t.pokemon_v2_pokemonspecies,p=m.length<160;return console.log(t.pokemon_v2_pokemonspecies),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"row",children:[t.pokemon_v2_pokemonspecies.map((function(e,n){return(0,s.jsxs)("div",{className:"col-sm-12 col-lg-4",children:[console.log(e),(0,s.jsx)(l,{name:e.name,types:e.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes,abilities:e.pokemon_v2_pokemons[0].pokemon_v2_pokemonabilities,stats:e.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats,src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+(n+1)+".png"},n)]})})),(0,s.jsx)("div",{className:"col-12 d-flex justify-content-center py-1",children:p&&(0,s.jsx)("button",{onClick:function(){return console.log("hello"),void r({variables:{offset:m.length}})},disabled:c,children:c?"Loading...":"Show More"})})]})})}var h=o(2836),k=o.n(h),u=function(){return(0,s.jsx)("footer",{className:"container-fluid py-5 ".concat(k().footer),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col d-flex justify-content-center align-items-center",children:[(0,s.jsx)("img",{className:"px-5 ".concat(k().pokemon),src:"/pokemon-logo.svg"}),(0,s.jsx)("img",{className:"mx-5 ".concat(k().fluid),src:"/fluid-logo.svg"})]})})})},f=o(3890),v=o.n(f),x=function(){return(0,s.jsx)("div",{className:"container-fluid my-5 py-5 ".concat(v().hero),children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-sm-12 col-lg-4",children:(0,s.jsxs)("h1",{children:["Welcome to the ",(0,s.jsx)("span",{children:"Pokedex."})]})}),(0,s.jsxs)("div",{className:"col-sm-12 col-lg-4 offset-lg-2",children:[(0,s.jsxs)("p",{children:["The comprehensive database of Pokemon from the original Blue and Red version. ",(0,s.jsx)("span",{children:"Find your favourite and check out their stats."})]}),(0,s.jsxs)("form",{className:"mt-5",children:[(0,s.jsx)("input",{type:"search",placeholder:"Search the Pokedex"}),(0,s.jsx)("button",{children:"Search"})]})]})]})})})},j=!0,g=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{}),(0,s.jsx)("div",{className:"container-fluid py-5",style:{backgroundColor:"#FF2E2E"},children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)(p,{})})}),(0,s.jsx)(u,{})]})}},2836:function(e){e.exports={footer:"Footer_footer__Dhw_9",pokemon:"Footer_pokemon__PxIuX",fluid:"Footer_fluid__hKFjJ"}},3890:function(e){e.exports={hero:"Hero_hero__I8Aqv"}},636:function(e){e.exports={card:"PokemonCard_card__86cWh",imageSection:"PokemonCard_imageSection__mKVgO",image:"PokemonCard_image__Cg1Fr",details:"PokemonCard_details__k5T8k",name:"PokemonCard_name___CH7a",title:"PokemonCard_title__mRwgI",typeSection:"PokemonCard_typeSection__1E7Cp",types:"PokemonCard_types__rhL_9",abilitiesSection:"PokemonCard_abilitiesSection__iwQzv",abilities:"PokemonCard_abilities__mWgfR",statsSection:"PokemonCard_statsSection__Cadba",container:"PokemonCard_container__gzZoq",statbar:"PokemonCard_statbar__4DLEQ",statbarStat:"PokemonCard_statbarStat__YJ3KS",subtitle:"PokemonCard_subtitle__jbgZX"}}},function(e){e.O(0,[844,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);