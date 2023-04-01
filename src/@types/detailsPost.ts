import { IComment } from "./comment";
import { IPost } from "./post";

export interface IDetailsPost extends IPost{
    getComments: (id: number) => void;
    comments: IComment[];
}