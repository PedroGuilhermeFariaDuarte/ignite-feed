
// Styles
import styles from "./styles.module.css"

export function Post({authorName, authorImage}) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <div className={styles.authorImage}>
                        <img src="https://avatars.githubusercontent.com/u/16112395?v=4" />
                    </div>
                    <div className={styles.authorDescription}>
                        <strong>Pedro Guilherme</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title={new Date().toString()} dateTime={new Date().toLocaleString()}>Publicado há 1hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a>jane.design/doctorcare</a></p>

                <p>
                    <a>#novoprojeto </a>
                    <a>#nlw</a>
                    <a>#rocketseat</a>
                </p>
            </div>
        </article>
    )
}