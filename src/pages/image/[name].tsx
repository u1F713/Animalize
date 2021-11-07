import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ImageItemDto } from '../../common/gallery.dto';
import { ActionCreators } from '../../states';
import { loadGallery, loadImage } from '../../utils/loadGallery';
import Gallery from '../../components/gallery';
import Layout from '../../components/layout';
import Modal from '../../components/modal';

export const getStaticPaths = async () => {
  const imgs = await loadGallery(50);
  const paths = imgs.map((image): unknown => ({
    params: { name: image.alternativeText },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const img = await loadImage(context.params.name);
  return {
    props: {
      img,
    },
  };
};

const Image: FunctionComponent<{ img: ImageItemDto }> = ({ img }) => {
  const dispath = useDispatch();

  const { setModal } = bindActionCreators(ActionCreators, dispath);
  useEffect(() => {
    setModal({
      modalVisible: true,
      pictureSrc: img.pictureSrc,
      alternativeText: img.alternativeText,
    });
  }, []);

  return (
    <Layout>
      <Gallery />
      <Modal />
    </Layout>
  );
};
export default Image;
