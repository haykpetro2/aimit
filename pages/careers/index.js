import axios from 'axios';
import Careers from '../../views/Careers';

export async function getStaticProps() {
  const vacanciesData = await axios.get(
    `${process.env.NEXT_PUBLIC_PublicUrl}/open-vacancy?offset=0&limit=50`
  );

  return {
    props: {
      vacanciesData: vacanciesData.data.data,
      count: vacanciesData.data.count,
    },
  };
}

export default Careers;
