import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
 
function Modal({ open, children, onClose }) {
  const dialog = useRef();
 
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);
 
  // The modal is rendered using a portal to a DOM node with the ID 'modal'.
  // ESC key handling is managed by the native dialog element.
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
 
export default Modal;
