import { Modal } from "@bka-stuff/mfe-utils";
import { FC } from "react";
import "./styles.css";

type BillModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const BillModal: FC<BillModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} close={onClose}>
      <div className="bill-modal-body">
        <h2 className="tw:mb-[16px]">New Bill</h2>
      </div>
    </Modal>
  )
};

export default BillModal;
