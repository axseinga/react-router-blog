import Post from "./Post";
import Pagination from "./Pagination";

const ShowContent = (props) => {
    const { posts, path } = props;
    return (
        <Pagination posts={posts} path={path}>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </Pagination>
    );
};

export default ShowContent;
