import { useState, FormEvent, ChangeEvent } from "react";

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    alert("Thank you! Your message has been sent.");

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}
