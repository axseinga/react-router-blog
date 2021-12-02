import StyledSidebar from "./styled/Sidebar.styled";

const Sidebar = (props) => {
    let tags = [];
    props.posts.forEach((post) => {
        tags.push(post.data.tags);
    });
    let cat = [];
    tags.flat(2).forEach((item) => {
        cat.push(item.tag);
    });
    let uniqueCat = [...new Set(cat)];
    const showContent = () => {
        return uniqueCat.map((cat) => {
            return (
                <a href="#" key={cat}>
                    {cat}
                </a>
            );
        });
    };
    return <StyledSidebar>{showContent()}</StyledSidebar>;
};

export default Sidebar;
