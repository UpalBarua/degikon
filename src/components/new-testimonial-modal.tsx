"use client";

import { addNewTestimonialToDB } from "@/lib/services";
import { uploadFile } from "@/lib/upload-file";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Camera } from "lucide-react";
import { Fragment, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const testimonialFormSchema = z.object({
  comment: z
    .string()
    .trim()
    .min(5, { message: "Comment must be at least 5 characters." })
    .max(500, { message: "Comment cannot exceed 200 characters." }),
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(20, { message: "Name cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Name must only include alphanumeric characters.",
    }),
  starRating: z.coerce
    .number()
    .min(1, { message: "Ratings must be at least 1 star." })
    .max(5, { message: "Ratings cannot exceed 5 star." }),
});

type TestimonialForm = z.infer<typeof testimonialFormSchema>;

export function NewTestimonialModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pictureFile, setPictureFile] = useState<File | null>(null);

  const { control, handleSubmit, reset } = useForm<TestimonialForm>({
    resolver: zodResolver(testimonialFormSchema),
    defaultValues: {
      name: "",
      comment: "",
      starRating: undefined,
    },
  });

  const onSubmit = async ({ name, comment, starRating }: TestimonialForm) => {
    try {
      setIsSubmitting(true);

      if (!pictureFile) {
        return console.log("please add a picture");
      }

      const pictureURL = await uploadFile(pictureFile);

      const newTestimonial = {
        comment,
        starRating,
        customer: {
          name,
          picture: pictureURL,
        },
      };

      await addNewTestimonialToDB(newTestimonial);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Fragment>
      <Button size="lg" color="primary" onPress={onOpen}>
        Add New Testimonial
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "bg-background/90 border border-foreground/10 backdrop-blur-md md:p-4 backdrop-saturate-150",
          body: "px-2",
        }}
      >
        <ModalContent>
          {(onClose: () => void) => (
            <Fragment>
              <ModalHeader className="flex flex-col gap-1">
                Add New Testimonial
              </ModalHeader>
              <ModalBody>
                <form
                  className="flex flex-col gap-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="relative w-max">
                    <input
                      id="picture"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        setPictureFile(
                          e.target.files ? e.target.files[0] : null,
                        )
                      }
                    />
                    <label
                      htmlFor="picture"
                      className="rounded-inherit absolute inset-0 z-10 cursor-pointer appearance-none bg-transparent"
                    />
                    <Avatar
                      showFallback
                      radius="lg"
                      src={pictureFile ? URL.createObjectURL(pictureFile) : ""}
                      fallback={<Camera className="h-8 w-8" />}
                      className="h-20 w-20"
                    />
                  </div>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Input
                        size="lg"
                        labelPlacement="outside"
                        label="Customer Name"
                        placeholder="Enter customer name"
                        errorMessage={fieldState.error?.message || ""}
                        isInvalid={fieldState.invalid}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="starRating"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Input
                        size="lg"
                        labelPlacement="outside"
                        label="Ratings"
                        placeholder="Enter star ratings"
                        errorMessage={fieldState.error?.message || ""}
                        isInvalid={fieldState.invalid}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="comment"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Textarea
                        size="lg"
                        minRows={6}
                        labelPlacement="outside"
                        label="Customer comment"
                        placeholder="Enter customer comment"
                        errorMessage={fieldState.error?.message || ""}
                        isInvalid={fieldState.invalid}
                        {...field}
                      />
                    )}
                  />
                  <div className="flex items-center justify-end gap-x-2 pt-8">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" type="submit" onPress={onClose}>
                      Add Testimonial
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </Fragment>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
