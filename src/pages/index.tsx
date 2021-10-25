import Gallery from '../components/gallery';

export const getStaticProps = async () => {
  const galleryData = await (
    await fetch('http://localhost:3000/api/gallery')
  ).json();
  return {
    props: {
      gallery: {
        data: galleryData,
      },
    },
  };
};

export default function Home({ gallery }) {
  return <Gallery galleryList={gallery.data} />;
}
