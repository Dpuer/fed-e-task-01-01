// 枚举

export {}

// const PostStatus = {
//     Draft: 0,
//     Unpublished: 1,
//     Published: 2
// }

// enum PostStatus {
//     Draft = 0,
//     Unpublished = 1,
//     Published = 2
// }

// enum PostStatus {
//     Draft = 8,
//     Unpublished,
//     Published
// }

// enum PostStatus {
//     Draft = 'aaa',
//     Unpublished = 'bbb',
//     Published = 'ccc'
// }

 const enum PostStatus {
    Draft,
    Unpublished,
    Published
}

const post = {
    title: 'Hello TypeScript',
    content: 'TypeScript is a typed superset of JavaScript',
    status: PostStatus.Draft // 1 //0
}