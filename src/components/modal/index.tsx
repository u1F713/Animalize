import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, State } from '../../states';
import FullScreenContainer from '../containers/fullscreen';

/* eslint-disable @next/next/no-img-element */
const Modal: FunctionComponent = (): JSX.Element => {
  const dispath = useDispatch();
  const modal = useSelector((state: State) => state.modal);
  const { setModal } = bindActionCreators(ActionCreators, dispath);
  const closeModal = () => {
    setModal({ pictureSrc: '', alternativeText: '', modalVisible: false });
  };
  return (
    <>
      {modal.modalVisible ? (
        <FullScreenContainer>
          <div onClick={closeModal} id="Modal" role="none">
            <div className="modal-body">
              <img src={modal.pictureSrc} alt={modal.alternativeText} />
            </div>
          </div>
        </FullScreenContainer>
      ) : null}
    </>
  );
};

export default Modal;
