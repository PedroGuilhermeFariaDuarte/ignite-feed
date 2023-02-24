// Styles
import styles from "./styles.module.css"

export function Avatar({path, alt, isDefault}){
    return (
        <div className={`${isDefault ? styles.avatarDefault : styles.avatar}`}>
            <img src={path} alt={alt} />
        </div>
    )
}