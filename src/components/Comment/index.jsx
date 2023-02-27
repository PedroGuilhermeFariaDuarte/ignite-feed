import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react"

// Components
import {Avatar} from "../Avatar"

// Styles
import styles from "./styles.module.css"

export function Comment({ commentary, indexComment, onRemoveCommentary }){    
    const [hotsCount, setHotsCount] = useState(0)

    const publisehdDateFormated = format(commentary.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publisehdDateRelativeToNow = formatDistanceToNow(commentary.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleHotComment (){
        try {
            setHotsCount(actualHotsCount => actualHotsCount + 1)            
        } catch (error) {
            console.log("CommentComponent@error ~ handleHotComment", error)
        }
    }

    return (
        <div className={styles.comment}>
            <div className={styles.commentImage}>
                <Avatar path={commentary.author.avatar_url} isDefault={true} />                                    
            </div>

            <div className={styles.commentContainer}>
                <div className={styles.commentContent}>
                    <div className={styles.commentHeader}>
                        <div className={styles.commentAuthor}>
                            <span className={styles.commentAuthorText}>
                                {commentary.author.name}
                                {
                                    commentary.author.id === 16112395 ? <><span>(Você)</span></> : <></>
                                }                            
                            </span>
                            <time title={publisehdDateFormated} dateTime={new Date().toLocaleString()}>
                                {publisehdDateRelativeToNow}
                            </time>
                        </div>

                        <button title="Deletar comentário" onClick={() => onRemoveCommentary(indexComment)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </button>
                    </div>
                    {
                        commentary.content.text.map((text, index) => {
                            if (text.type === 'paragraph') {
                                return <p key={index}>{text.content}</p>
                            } else if (text.type === 'link') {
                                return <p key={index}><a>{text.content}</a></p>
                            }
                        })
                    }                    
                </div>

                <div className={styles.commentReactions}>
                    <button title="Dar um hot" onClick={handleHotComment}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>                        
                        <span> {hotsCount} </span>
                    </button>
                </div>
            </div>

        </div>
    )
}