(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 810:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Dhw_9",
	"pokemon": "Footer_pokemon__PxIuX",
	"fluid": "Footer_fluid__hKFjJ"
};


/***/ }),

/***/ 519:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "Hero_hero__I8Aqv"
};


/***/ }),

/***/ 967:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "PokemonCard_card__86cWh",
	"imageSection": "PokemonCard_imageSection__mKVgO",
	"image": "PokemonCard_image__Cg1Fr",
	"details": "PokemonCard_details__k5T8k",
	"name": "PokemonCard_name___CH7a",
	"title": "PokemonCard_title__mRwgI",
	"typeSection": "PokemonCard_typeSection__1E7Cp",
	"types": "PokemonCard_types__rhL_9",
	"abilitiesSection": "PokemonCard_abilitiesSection__iwQzv",
	"abilities": "PokemonCard_abilities__mWgfR",
	"statsSection": "PokemonCard_statsSection__Cadba",
	"container": "PokemonCard_container__gzZoq",
	"statbar": "PokemonCard_statbar__4DLEQ",
	"statbarStat": "PokemonCard_statbarStat__YJ3KS",
	"subtitle": "PokemonCard_subtitle__jbgZX"
};


/***/ }),

/***/ 21:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
// EXTERNAL MODULE: ./lib/apolloClient.js
var lib_apolloClient = __webpack_require__(397);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(114);
// EXTERNAL MODULE: ./components/PokemonCard/PokemonCard.module.scss
var PokemonCard_module = __webpack_require__(967);
var PokemonCard_module_default = /*#__PURE__*/__webpack_require__.n(PokemonCard_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/PokemonCard/PokemonCard.js



const PokemonCard = ({ name , types , src , abilities , stats  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PokemonCard_module_default()).card,
        children: [
            console.log(stats),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (PokemonCard_module_default()).imageSection,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    lazy: true,
                    className: (PokemonCard_module_default()).image,
                    src: src
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PokemonCard_module_default()).details,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (PokemonCard_module_default()).name,
                        children: name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (PokemonCard_module_default()).typeSection,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (PokemonCard_module_default()).title,
                                children: "Type"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (PokemonCard_module_default()).types,
                                children: types.map((type, i)=>{
                                    return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: type.pokemon_v2_type.name
                                    }, i));
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (PokemonCard_module_default()).abilitiesSection,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (PokemonCard_module_default()).title,
                                children: "Abilities"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (PokemonCard_module_default()).abilities,
                                children: abilities.map((ability, i)=>{
                                    return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: ability.pokemon_v2_ability.name
                                    }, i));
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (PokemonCard_module_default()).statsSection,
                        children: stats.map((stat, i)=>{
                            {
                                console.log(stat);
                            }
                            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (PokemonCard_module_default()).container,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (PokemonCard_module_default()).subtitle,
                                        children: stat.pokemon_v2_stat.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (PokemonCard_module_default()).statbar,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (PokemonCard_module_default()).statbarStat,
                                            style: {
                                                width: stat.base_stat + "%"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (PokemonCard_module_default()).name,
                                        children: stat.base_stat
                                    })
                                ]
                            }, i));
                        })
                    })
                ]
            })
        ]
    })
;

;// CONCATENATED MODULE: ./components/PostList.js



const ALL_POSTS_QUERY = client_.gql`
  query pokemon_v2_pokemonspecies($limit: Int, $offset: Int) {
    pokemon_v2_pokemonspecies(
      limit: $limit
      offset: $offset
      where: { pokemon_v2_generation: { name: { _eq: "generation-i" } } }
      order_by: { id: asc }
    ) {
      name
      id
      pokemon_v2_pokemons {
        pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
          }
        }
        pokemon_v2_pokemonstats {
          pokemon_v2_stat {
            name
          }
          base_stat
        }
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  }
`;
const allPostsQueryVars = {
    offset: 0,
    limit: 3
};
function PostList() {
    const { loading , error , data , fetchMore , networkStatus  } = (0,client_.useQuery)(ALL_POSTS_QUERY, {
        variables: allPostsQueryVars,
        // Setting this value to true will make the component rerender when
        // the "networkStatus" changes, so we are able to know if it is fetching
        // more data
        notifyOnNetworkStatusChange: true
    });
    const loadingMorePosts = networkStatus === client_.NetworkStatus.fetchMore;
    const loadMorePosts = ()=>{
        console.log("hello");
        fetchMore({
            variables: {
                offset: allPosts.length
            }
        });
    };
    if (error) return console.log("error");
    if (loading && !loadingMorePosts) return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading"
    }));
    const allPosts = data.pokemon_v2_pokemonspecies;
    const areMorePosts = allPosts.length < 160;
    console.log(data.pokemon_v2_pokemonspecies);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [
                data.pokemon_v2_pokemonspecies.map((post, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-sm-12 col-lg-4",
                        children: [
                            console.log(post),
                            /*#__PURE__*/ jsx_runtime_.jsx(PokemonCard, {
                                name: post.name,
                                types: post.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes,
                                abilities: post.pokemon_v2_pokemons[0].pokemon_v2_pokemonabilities,
                                stats: post.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats,
                                src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (index + 1) + ".png"
                            }, index)
                        ]
                    })
                ),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-12 d-flex justify-content-center py-1",
                    children: areMorePosts && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>loadMorePosts()
                        ,
                        disabled: loadingMorePosts,
                        children: loadingMorePosts ? "Loading..." : "Show More"
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(810);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/Footer.js


const Footer = ()=>/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: `container-fluid py-5 ${(Footer_module_default()).footer}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col d-flex justify-content-center align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: `px-5 ${(Footer_module_default()).pokemon}`,
                        src: "/pokemon-logo.svg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: `mx-5 ${(Footer_module_default()).fluid}`,
                        src: "/fluid-logo.svg"
                    })
                ]
            })
        })
    })
;

// EXTERNAL MODULE: ./components/Hero/Hero.module.scss
var Hero_module = __webpack_require__(519);
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);
;// CONCATENATED MODULE: ./components/Hero/Hero.js


const Hero = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `container-fluid my-5 py-5 ${(Hero_module_default()).hero}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-sm-12 col-lg-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            children: [
                                "Welcome to the ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Pokedex."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-sm-12 col-lg-4 offset-lg-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "The comprehensive database of Pokemon from the original Blue and Red version. ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Find your favourite and check out their stats."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                className: "mt-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "search",
                                        placeholder: "Search the Pokedex"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        children: "Search"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    })
;

;// CONCATENATED MODULE: ./pages/index.js







const IndexPage = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container-fluid py-5",
                style: {
                    backgroundColor: "#FF2E2E"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(PostList, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    })
;
async function getStaticProps() {
    const apolloClient = (0,lib_apolloClient/* initializeApollo */["in"])();
    await apolloClient.query({
        query: ALL_POSTS_QUERY,
        variables: allPostsQueryVars
    });
    return (0,lib_apolloClient/* addApolloState */._p)(apolloClient, {
        props: {},
        revalidate: 1
    });
}
/* harmony default export */ const pages = (IndexPage);


/***/ }),

/***/ 114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 596:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ 330:
/***/ ((module) => {

"use strict";
module.exports = require("deepmerge");

/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ 28:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,397], () => (__webpack_exec__(21)));
module.exports = __webpack_exports__;

})();