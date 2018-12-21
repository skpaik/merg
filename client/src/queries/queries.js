import {gql} from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;


const getUsersQuery = gql`
    {
        users {
            name
            id
        }
    }
`;

const getPostsQuery = gql`
    {
        posts {
            title
            details
            read_length
            banner_image_url
            id
            user {
                id
                name
                age
                pro_pic_url               
            }
        }
    }
`;


const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;


const getPostsCustomQuery = gql`
      query GetPostsCustom($post_type: String!){
        posts_custom (post_type: $post_type){
            title
            details
            read_length
            banner_image_url
            id
            user {
                id
                name               
                pro_pic_url               
            }
        }
    }
`;

const getPostsTagsQuery = gql`
      query GetPostsByTags($tags: [String!]){
        posts_by_tags (tags: $tags){
            title
            details
            read_length
            banner_image_url
            id
            user {
                id
                name               
                pro_pic_url               
            }
        }
    }
`;

const getPostQuery = gql`
    query GetPost($id: ID){
        post(id: $id) {
            id
            title
            banner_image_url
            details
            create_at
            read_length
            user {
                id
                name
                age
                pro_pic_url
                posts {                    
                    id
                    title
                    banner_image_url
                    details
                    create_at
                    read_length
                }
            }
        }
    }
`;


export {
    getAuthorsQuery,
    getBooksQuery,
    addBookMutation,
    getBookQuery,
    getUsersQuery,
    getPostsQuery,
    getPostsCustomQuery,
    getPostsTagsQuery,
    getPostQuery
};
