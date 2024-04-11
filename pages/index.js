import axios from 'axios';
import Home from '../views/Home';

export async function getStaticProps() {
  const homeBlogData = await axios.get(
    `${process.env.NEXT_PUBLIC_PublicUrl}/open-blog?offset=0&limit=50`
  );

  return {
    props: {
      homeBlogData: homeBlogData.data.data,
    },
  };
}
export default Home;
