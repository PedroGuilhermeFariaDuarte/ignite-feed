import { useState } from "react"

import {format, formatDistanceToNow} from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

// Components
import {Avatar} from "../Avatar"
import { Comment } from "../Comment"

// Styles
import styles from "./styles.module.css"

export function Post({post}) {
    const [comments,setComments] = useState(post.commentaries)
    const [newCommentText,setNewCommentText] = useState("")    

    const publisehdDateFormated = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publisehdDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const isNewCommentEmpty = newCommentText.length <= 0
    
    function handleNewCommentChange(){
        try {
            if (!event ) return
            
            event.target.setCustomValidity("")
            const elementTextAreaValue = event?.target?.value || '';

            setNewCommentText(elementTextAreaValue)
        } catch (error) {
            console.log('PostComponent@error ~ handleNewCommentChange', error)
        }        
    }

    function handleCreateNewCommentary(event) {
        try {
            if (!event || newCommentText.trim() === '') return

            event.preventDefault()
        
            setComments(comments => [...comments, {
                id: 16112395,
                uuid: new Date().getTime(),
                author: {
                    avatar_url: "https://avatars.githubusercontent.com/u/16112395?v=4",
                    name: "Pedro Guilherme",
                    id: 16112395
                },
                publishedAt: new Date(),
                content: {
                    text: [
                        {
                            type: "paragraph",
                            content: newCommentText
                        },
                    ],
                    tags: []
                },
                hots: 0
            }])

            setNewCommentText("")
        } catch (error) {            
            console.log('PostComponent@error ~ handleCreateNewCommentary', error)
        }
    }    

    function handleRemoveCommentary(indexCommentToDelete = -1){
        try {            
            if (indexCommentToDelete <= -1 || !comments?.[indexCommentToDelete]) return            

            const commentsWithoutDeletedOne = comments.filter((_comment, index) => index !== indexCommentToDelete)                        

            setComments(commentsWithoutDeletedOne)
        } catch (error) {
            console.log("PostComponent@error ~ handleRemoveCommentary", error)
        }
    }

    function handlerNewCommentInvalid(){
        try {
            event.target.setCustomValidity("Esté campo é obrigatório")            
        } catch (error) {
            console.log("PostComponent@error ~ handlerNewCommentInvalid", error)
        }
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar path={post.author.avatar_url} isDefault={true} />                    
                    <div className={styles.authorDescription}>
                        <span className={styles.strong}>
                            {post.author.name}
                        </span>
                        <span>
                            {
                                post.author.role.length > 10 ? post.author.role.substr(0, post.author.role.length - 25) + '...' : post.author.role
                            }
                        </span>
                    </div>
                </div>
                <time title={publisehdDateFormated} dateTime={post.publishedAt.toISOString()}>
                    {publisehdDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    post.content.text.map((text, index) => {
                        if(text.type === 'paragraph') {
                            return <p key={index}>{text.content}</p>
                        } else if (text.type === 'link') {
                            return <p key={index}><a>{text.content}</a></p>
                        }
                    })
                }

                <p className={styles.anchors}>
                    {
                        post.content.tags.map((tag,index) => {
                            return <a key={index}>#{tag}</a>
                        })
                    }                      
                </p>
            </div>

            <form onSubmit={handleCreateNewCommentary} className={styles.commentForm}>
                <span className={styles.formDescription}>Deixe seu feedback</span>
                <textarea 
                    placeholder="Deixe um comentario" 
                    name="comment" 
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handlerNewCommentInvalid}
                    required 
                />                                
                <div className={styles.commentFormFooter}>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </div>
            </form>

            <div className={styles.commentList}>
                {
                    comments.length <= 0 ? 'Nenhum comentário disponível' : ''
                }
                {
                    comments.map((commentary, index) => <Comment 
                            commentary={commentary}                             
                            onRemoveCommentary={handleRemoveCommentary}
                            indexComment={index} 
                            key={commentary.uuid || index} 
                        />
                    )
                }                
            </div>
        </article>
    )
}