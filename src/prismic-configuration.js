import Prismic from "@prismicio/client";

const apiEndpoint = "https://react-routing-blog.cdn.prismic.io/api/v2";
const accessToken = "";

const Client = Prismic.client(apiEndpoint, { accessToken });

const fetchData = async (type) => {
    const response = await Client.query(
        Prismic.Predicates.at("document.type", type)
    );
    if (response) {
        return response;
    }
};

export default fetchData;
