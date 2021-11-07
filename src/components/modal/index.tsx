import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, State } from '../../states';

const Modal: FunctionComponent = (): JSX.Element => {
  const dispath = useDispatch();
  const modal = useSelector((state: State) => state.modal);
  const { setModal } = bindActionCreators(ActionCreators, dispath);

  const closeModal = () => {
    setModal({
      pictureSrc: modal.pictureSrc,
      alternativeText: modal.alternativeText,
      modalVisible: false,
    });
  };

  return (
    <div
      onClick={closeModal}
      className={`modal   ${
        modal.modalVisible ? 'show-modal' : 'hidden-modal'
      }`}
      role="none"
    >
      <div className="modal-body">
        <img src={modal.pictureSrc} alt={modal.alternativeText} />
      </div>
    </div>
  );
};

export default Modal;
