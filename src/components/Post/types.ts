// External Types
import { ICommentary, IText } from "../Comment/types"

export interface IPostProps {
    post: IPost
}

export interface IPost {
    id: number,
    author: {
        avatar_url: string,
        name: string,
        role: string
    },
    publishedAt: Date,
    content: {
        text: Array<IText>,
        tags: Array<any>
    },
    commentaries: Array<ICommentary>
}