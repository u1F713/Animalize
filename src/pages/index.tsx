import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, State } from '../states';
import Gallery from '../components/gallery';
import Layout from '../components/layout';
import loadGallery from '../utils/loadGallery';

export const getStaticProps = async () => {
  const galleryData = loadGallery();
  return {
    props: {
      gallery: {
        data: galleryData,
      },
    },
  };
};

export default function Home({ gallery }) {
  const dispath = useDispatch();
  const { setGalleryItems } = bindActionCreators(ActionCreators, dispath);
  const galleryList = useSelector((state: State) => state.gallery);
  setGalleryItems(gallery.data);

  return (
    <Layout>
      <Gallery galleryList={galleryList} />
    </Layout>
  );
}
