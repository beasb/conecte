import styles from './Services.module.css'
import embreve from '../../../img/embreve.png'

function Services() {
    return ( <section>
        <div className={styles.texto} >
    <h1>Sinto muito pelo transtorno, estamos trabalhando muito para oferecer a você a melhor experiência!</h1>
    </div>

{<img src={embreve} alt="img do fundo" className={styles.img} />}

</section>)
   }
   
   export default Services