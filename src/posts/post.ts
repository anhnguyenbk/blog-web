import {Category} from "../categories/category";

export class Post {
    id: string;
    title: string;
    slug: string;
    desc: string;
    categories: Category[]
}
