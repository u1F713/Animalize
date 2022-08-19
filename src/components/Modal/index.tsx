import { FC, useCallback } from 'react'
import { useDispatch, useSelector } from '~/modules/redux'
import S from './Modal.module.sass'

const Modal: FC = (): JSX.Element => {
  const dispath = useDispatch()
  const modal = useSelector((state) => state.modal)

  const closeModal = useCallback(() => {
    dispath({
      type: 'modal/close'
    })
  }, [dispath])

  return (
    <div
      onClick={closeModal}
      className={`${S.modal} ${modal.visible === true ? S.show_modal : S.hidden_modal}`}
      role="none"
    >
      <figure className={S.modal_body}>
        <img className={S.picture} src={modal.picture} alt={modal.alternativeText} />
      </figure>
    </div>
  )
}

export default Modal
