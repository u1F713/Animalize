/* eslint-disable @next/next/no-img-element */
import Layout from '../components/layout';
import Modal from '../components/modal';

const Test = () => {
  return (
    <Layout>
      <Modal>
        <img
          src="https://res.cloudinary.com/dmfac7zfe/image/upload/v1635266231/gallery/face_vstufy.png"
          alt=""
        />
      </Modal>
    </Layout>
  );
};

export default Test;
