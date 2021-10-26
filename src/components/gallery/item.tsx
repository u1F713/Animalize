import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../states';
import { ImageItemDto } from '../../common/gallery.dto';

export type GalleryItemProps = ImageItemDto;

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line @next/next/no-img-element
// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
const GalleryItem: FunctionComponent<GalleryItemProps> = ({
  pictureSrc,
  alternativeText,
}) => {
  const dispath = useDispatch();
  const { setModal } = bindActionCreators(ActionCreators, dispath);
  const updateModal = () => {
    setModal({ alternativeText, pictureSrc, modalVisible: true });
  };

  return (
    <figure onClick={updateModal} className="gallery-item">
      <img src={pictureSrc} alt={alternativeText} />
    </figure>
  );
};

export default GalleryItem;
