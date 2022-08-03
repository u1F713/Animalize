/*
import { FunctionComponent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators, State } from '../../common/states'

const Modal: FunctionComponent = (): JSX.Element => {
  const dispath = useDispatch()
  const modal = useSelector((state: State) => state.modal)
  const { setModal } = bindActionCreators(ActionCreators, dispath)

  const closeModal = (): void => {
    setModal({
      pictureSrc: modal.pictureSrc,
      alternativeText: modal.alternativeText,
      modalVisible: false
    })
    // document.body.style.overflow = 'visible';
  }

  return (
    <div
      onClick={closeModal}
      className={`modal   ${modal.modalVisible === true ? 'show-modal' : 'hidden-modal'}`}
      role="none"
    >
      <div className="modal-body">
        <img src={modal.pictureSrc} alt={modal.alternativeText} />
      </div>
    </div>
  )
}

export default Modal
*/
export default <></>
