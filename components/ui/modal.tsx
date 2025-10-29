"use client";

import { Dialog, DialogContent } from "./dialog";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
