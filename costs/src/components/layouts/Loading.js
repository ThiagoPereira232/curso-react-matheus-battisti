import loading from '../../imgs/loading.svg'

import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img src={loading} alt="Carregando..." className={styles.loader}/>
        </div>
    )
}

export default Loading