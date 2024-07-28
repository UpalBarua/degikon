"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Loader2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

type ConfirmationModalProps = {
  onConfirm(): Promise<void>;
};

export function ConfirmationModal({
  onConfirm,
}: Readonly<ConfirmationModalProps>) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleConfirm() {
    try {
      setIsSubmitting(true);

      await onConfirm();
      onOpenChange();

      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Fragment>
      <Button onPress={onOpen} fullWidth size="lg">
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Deleting</span>
          </>
        ) : (
          <>
            <Trash2 className="h-5 w-5" />
            <span>Delete</span>
          </>
        )}
      </Button>
      <Modal size="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Confirmation</ModalHeader>
              <ModalBody>Are you sure you want to delete this?</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button type="button" onPress={handleConfirm}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
