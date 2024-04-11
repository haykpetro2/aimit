import axios from 'axios';
import singleBlog from '../../../views/singleBlog';

export const getStaticPaths = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_PublicUrl}/open-blog?offset=0&limit=4`
  );

  const paths = response?.data?.data?.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const singleBlogData = axios.get(`${process.env.NEXT_PUBLIC_PublicUrl}/open-blog/${id}`);
  const singleBlogLatestArticlesData = axios.get(
    `${process.env.NEXT_PUBLIC_PublicUrl}/open-blog?offset=0&limit=50`
  );

  const [singleBlogDataRes, singleBlogLatestArticlesDataRes] = await axios.all([
    singleBlogData,
    singleBlogLatestArticlesData,
  ]);

  return {
    props: {
      singleBlogData: singleBlogDataRes.data.data,
      singleBlogLatestArticles: singleBlogLatestArticlesDataRes.data.data,
    },
  };
}
export default singleBlog;
