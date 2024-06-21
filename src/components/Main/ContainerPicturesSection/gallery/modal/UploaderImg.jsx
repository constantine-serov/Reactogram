import { createPortal } from "react-dom"
import { useRef, useEffect } from 'react'

export default function ModalUploadImg({children, open}) {
  const dialogRef = useRef()

  useEffect(() => {
      if (open === true) {
        dialogRef.current.showModal()
      } else {
        dialogRef.current.close()
      }
    },
    [open]
  )

  return createPortal(
    <dialog ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById('modal')
  )
}