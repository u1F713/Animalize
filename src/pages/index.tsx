import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../states';
import Gallery from '../components/gallery';
import Layout from '../components/layout';
import { loadGallery } from '../utils/loadGallery';

export const getStaticProps = async () => {
  const galleryData = await loadGallery(50);

  return {
    props: {
      gallery: {
        data: galleryData,
      },
    },
    revalidate: 10,
  };
};

const Home: FunctionComponent<{ gallery }> = ({ gallery }) => {
  const dispath = useDispatch();
  const { setGalleryItems } = bindActionCreators(ActionCreators, dispath);

  setGalleryItems(gallery.data);

  return (
    <Layout>
      <Gallery />
    </Layout>
  );
};
export default Home;
