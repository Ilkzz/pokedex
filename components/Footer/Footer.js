import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={`container-fluid py-5 ${styles.footer}`}>
    <div className='row'>
      <div className='col d-flex justify-content-center align-items-center'>
        <img className={`px-5 ${styles.pokemon}`} src={"/pokemon-logo.svg"} />
        <img className={`mx-5 ${styles.fluid}`} src={"/fluid-logo.svg"} />
      </div>
    </div>
  </footer>
)