import axios from 'axios';
import Blog from '../../views/Blog';

export async function getStaticProps() {
  const latestRes = axios.get(`${process.env.NEXT_PUBLIC_PublicUrl}/open-blog?offset=0&limit=4`);
  const vacanciesRes = axios.get(
    `${process.env.NEXT_PUBLIC_PublicUrl}/open-vacancy?offset=0&limit=3`
  );
  const articlesRes = axios.get(`${process.env.NEXT_PUBLIC_PublicUrl}/open-blog?offset=4&limit=6`);

  const [latestResData, vacanciesResData, articlesResData] = await axios.all([
    latestRes,
    vacanciesRes,
    articlesRes,
  ]);

  return {
    props: {
      latestRes: latestResData.data.data,
      vacanciesRes: vacanciesResData.data.data,
      articlesRes: articlesResData.data.data,
    },
  };
}
export default Blog;
