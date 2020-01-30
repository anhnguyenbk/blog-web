import {Category} from "../../categories/interfaces/category.interface";

export interface Post {
    id: string;
    title: string;
    slug: string;
    desc: string;
    categories: Category[],
}
