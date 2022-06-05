import ModalPortal from './ModalPortal'
import styles from './Modal.module.scss'

interface Props {
  children?: React.ReactNode
}

const Modal = (props: Props) => {
  const { children } = props
  return (
    <ModalPortal>
      <div className={styles.background} aria-hidden>
        <div className={styles.content}>{children}</div>
      </div>
    </ModalPortal>
  )
}
export default Modal
