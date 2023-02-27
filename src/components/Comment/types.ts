export interface IComment {
    commentary: ICommentary
    indexComment: number
    onRemoveCommentary: Function
}

export interface ICommentary 
{
    id: number,
    author: {
        avatar_url: string,
        name: string,
        id: number
    },
    publishedAt: Date,
    content: {
        text: Array<IText>
        tags: Array<any>
    },
    hots: number
}

export interface IText {
    type: TText,
    content: string
}

type TText = "paragraph" | "link"