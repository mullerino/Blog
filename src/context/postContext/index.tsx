import { ReactNode, createContext, useState } from 'react'
import { IPost } from '../../@types/post'
import { IComment } from '../../@types/comment';
import { IUser } from '../../@types/users';

interface IPostContext {
    posts: IPost[];
    comments: IComment[];
    users: IUser[];
    setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>; 
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

interface IContext{
    children: ReactNode;
}

export const PostContext = createContext<IPostContext>({} as IPostContext)

export const PostProvider = ( { children } : IContext) =>{
    const [posts,setPosts] = useState<IPost[]>([])
    const [comments, setComments] = useState<IComment[]>([])
    const [users, setUsers] = useState<IUser[]>([])
    
    return (
        <PostContext.Provider 
        value={{posts, setPosts, comments, setComments, users, setUsers}}>
            {children}
        </PostContext.Provider>
    )
}



