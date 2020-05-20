// 接口

export {}

interface Post {
    title: string
    content: string
    subtitle?: string
    readonly summary: string
}

const hello: Post = {
    title: 'hello typescript',
    content: 'a javascript superset',
    summary: 'a javascript'
}

// hello.summary = '11'

interface Cache {
    [prop: string]: string
}

const cache: Cache = {}
cache.a = '11'
cache.b = '22'
