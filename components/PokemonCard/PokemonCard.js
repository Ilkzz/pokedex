import styles from './PokemonCard.module.scss';
import Image from 'next/image';
export const PokemonCard = ({name, types, src, abilities, stats}) => (

  <div className={styles.card}>
    {console.log(stats)}
    <div className={styles.imageSection}>
      <img lazy className={styles.image} src={src} />
    </div>
    <div className={styles.details}>
      <p className={styles.name}>{name}</p>

      <div className={styles.typeSection}>
        <p className={styles.title}>Type</p>
        <p className={styles.types}>
          {types.map((type, i) => {
            return (
              <span>{type.pokemon_v2_type.name}</span>
            )
          })}
        </p>
      </div>

      <div className={styles.abilitiesSection}>
        <p className={styles.title}>Abilities</p>
        <p className={styles.abilities}>
          {abilities.map((ability, i) => {
            return (
              <span>{ability.pokemon_v2_ability.name}</span>
            )
          })}
        </p>
      </div>

      <div className={styles.statsSection}>
          {stats.map((stat, i) => {
            {console.log(stat)}
            return (
              <div className={styles.container}>
                <p className={styles.subtitle}>{stat.pokemon_v2_stat.name}</p>
                <div className={styles.statbar}>
                  <div className={styles.statbarStat} style={{width: stat.base_stat + "%"}}></div>
                </div>
                <p className={styles.name}>{stat.base_stat}</p>
              </div>
            )
          })}
      </div>

    </div>
  </div>
)