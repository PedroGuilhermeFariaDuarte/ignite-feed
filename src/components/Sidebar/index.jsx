// Styles
import styles from "./styles.module.css"

export function Sidebar(){
    return <>
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <div className={styles.imageProfile}>
                    <img src="https://avatars.githubusercontent.com/u/16112395?v=4" />
                </div>
            </div>
            <div className={styles.profile}>
                <strong>Pedro Guilherme</strong>
                <span>Full Stack Programmer</span>
            </div>
        </aside>
    </>
}