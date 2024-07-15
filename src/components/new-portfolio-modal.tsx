"use client";

import { addNewPortfolioToDB } from "@/lib/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const newPortfolioForm = z.object({
  instagramURL: z
    .string()
    .url()
    .refine((val) => val.startsWith("https://www.instagram.com/"), {
      message: "Not a valid instagram URL",
    }),
});

type NewPortfolioForm = z.infer<typeof newPortfolioForm>;

export function NewPortfolioModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const { control, handleSubmit, reset } = useForm<NewPortfolioForm>({
    resolver: zodResolver(newPortfolioForm),
    defaultValues: {
      instagramURL: "",
    },
  });

  const onSubmit = async (newPortfolio: NewPortfolioForm) => {
    try {
      setIsSubmitting(true);
      await addNewPortfolioToDB(newPortfolio);
      reset();
      onOpenChange();
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Fragment>
      <Button
        className="font-medium"
        size="lg"
        color="primary"
        onPress={onOpen}
      >
        Add New Portfolio
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border border-foreground/10",
        }}
      >
        <ModalContent>
          {(onClose: () => void) => (
            <Fragment>
              <ModalHeader className="flex flex-col gap-1">
                New Portfolio
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="instagramURL"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Input
                        size="lg"
                        label="Instagram Link"
                        placeholder="Enter a link"
                        errorMessage={fieldState.error?.message || ""}
                        isInvalid={fieldState.invalid}
                        {...field}
                        classNames={{
                          label: "text-base font-semibold",
                          inputWrapper:
                            "bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border border-foreground/10 data-[hover=true]:bg-content1/75 group-data-[focus=true]:bg-content1/75",
                        }}
                      />
                    )}
                  />
                  <div className="flex items-center justify-end gap-x-2 py-6">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" type="submit">
                      Add Portfolio
                    </Button>
                  </div>
                </form>
                {isSubmitting && (
                  <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-content1/75">
                    <Loader2 className="h-[2rem] w-[2rem] animate-spin text-primary" />
                  </div>
                )}
              </ModalBody>
            </Fragment>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
