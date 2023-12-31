import styles from './styles/styles.module.css';
import Like from './js/like';

function Bar() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.interactionsContaier}>
                    <p>Ayo</p>
                    <p>Ayo</p>
                    <Like />
                </div>
            </div>
           
        </>
    )
}

export default Bar;