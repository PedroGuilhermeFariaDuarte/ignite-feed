// Styles
import styles from "./styles.module.css"

// Types
import { IAvatar } from "./types"

export function Avatar({path, alt, isDefault, ...props}: IAvatar){
    return (
        <div className={`${isDefault ? styles.avatarDefault : styles.avatar}`}>
            <img src={path} alt={alt} {...props} />
        </div>
    )
}