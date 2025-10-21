import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
 
function Modal({ open, children, onClose }) {
  const dialog = useRef();
 
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      // dialog.current.close();
      // adding a small timeout to allow the closing animation to play
      setTimeout(() => dialog .current.close(), 200);
    } 
  }, [open]);
 
  // The modal is rendered using a portal to a DOM node with the ID 'modal'.
  // ESC key handling is managed by the native dialog element.
  return createPortal(
    <dialog className={`modal ${open ? "fade-in" : "fade-out"}`} ref={dialog} onClose={onClose}
    onClick={(e) => {
    const dialogNode = dialog.current;
    const rect = dialogNode.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;
    if (isOutside) onClose();
    }}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
 
export default Modal;
