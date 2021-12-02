import Prismic from "@prismicio/client";

const apiEndpoint = "https://react-routing-blog.cdn.prismic.io/api/v2";
const accessToken = "";

const Client = Prismic.client(apiEndpoint, { accessToken });

const fetchData = async () => {
    const response = await Client.query(
        Prismic.Predicates.at("document.type", "page")
    );
    if (response) {
        return response.results[0];
    }
};
fetchData();

export default fetchData;
