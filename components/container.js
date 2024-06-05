import styles from './container.module.css'

const Container = ({children}) => {
    return (
        <div className={styles.container}>
            <img className={styles.container_image} src="/cup.png"></img>
            <div className={styles.container_content}>
                {children}
            </div>
        </div>
    )
}
export default Container