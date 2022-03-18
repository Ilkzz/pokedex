import { gql, useQuery, NetworkStatus } from "@apollo/client";

import { PokemonCard } from "./PokemonCard/PokemonCard";

export const ALL_POSTS_QUERY = gql`
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

export const allPostsQueryVars = {
  offset: 0,
  limit: 3,
};

export default function PostList() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      variables: allPostsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  );

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  const loadMorePosts = () => {
    console.log("hello");
    fetchMore({
      variables: {
        offset: allPosts.length,
      },
    });
  };

  if (error) return console.log("error");
  if (loading && !loadingMorePosts) return <div>Loading</div>;

  const allPosts = data.pokemon_v2_pokemonspecies;
  const areMorePosts = allPosts.length < 160;
  console.log(data.pokemon_v2_pokemonspecies);
  return (
    <>
      <div className="row">
        {data.pokemon_v2_pokemonspecies.map((post, index) => (
          <div className="col-sm-12 col-lg-4">
            {console.log(post)}
            <PokemonCard
              key={index}
              name={post.name}
              types={post.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes}
              abilities={
                post.pokemon_v2_pokemons[0].pokemon_v2_pokemonabilities
              }
              stats={post.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats}
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
                (index + 1) +
                ".png"
              }
            ></PokemonCard>
          </div>
        ))}
        <div className="col-12 d-flex justify-content-center py-1">
          {areMorePosts && (
            <button onClick={() => loadMorePosts()} disabled={loadingMorePosts}>
              {loadingMorePosts ? "Loading..." : "Show More"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
