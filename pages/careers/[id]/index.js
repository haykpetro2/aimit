import axios from 'axios';
import SingleCareers from '../../../views/singleCareers';

export const getStaticPaths = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_PublicUrl}/open-vacancy?offset=0&limit=50`
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
  const careersSingleData = await axios.get(
    `${process.env.NEXT_PUBLIC_PublicUrl}/open-vacancy/${id}`
  );

  return {
    props: {
      careersSingleData: careersSingleData.data.data,
    },
  };
}
export default SingleCareers;
