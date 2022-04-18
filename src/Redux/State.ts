let onChange = () => {
}

type PostsType = {
    id: number
    message: string
    likeCount: number
}

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostsType>;
    newPostText: string;
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let State: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCount: 12},
            {id: 2, message: "It's my first post", likeCount: 9},
        ],
        newPostText: 'Some text',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Igor"},
            {id: 5, name: "Victor"}
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you road in Incubator?"},
            {id: 3, message: "Yo"}
        ]
    }
};

export const addPost = (postMessage: string) => {
    const newPost: PostsType = {
        id: new Date().getTime(),
        message: postMessage,
        likeCount: 0
    }
    State.profilePage.posts.push(newPost);
    onChange();
};

export const onPostChange = (newPostText: string) => {
    State.profilePage.newPostText = newPostText;
    onChange();
}

export const subscribe = (observer: () => void) => {
    onChange = observer;
}
