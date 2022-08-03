import { FC, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'src/store'

const Modal: FC = (): JSX.Element => {
  const dispath = useAppDispatch()
  const modal = useAppSelector((state) => state.modal)

  const closeModal = useCallback(() => {
    dispath({
      type: 'modal/close'
    })
  }, [dispath])

  return (
    <div
      onClick={closeModal}
      className={`modal ${modal.visible === true ? 'show-modal' : 'hidden-modal'}`}
      role="none"
    >
      <figure className="modal-body">
        <img src={modal.picture} alt={modal.alternativeText} />
      </figure>
    </div>
  )
}

export default Modal
