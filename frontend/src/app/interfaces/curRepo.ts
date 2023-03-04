export interface curRepo {
    name?: string,
    description?:string,
    created_at?:Date,
    owner?:{
        login?:string
    },
    commits?:any[]
};