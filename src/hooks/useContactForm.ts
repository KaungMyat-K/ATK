import { useState, FormEvent, ChangeEvent } from "react";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormStatus {
  type: "success" | "error" | null;
  msg: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<FormStatus>({ type: null, msg: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          msg: "မက်ဆေ့ခ်ျ ပို့ဆောင်ပြီးပါပြီ။ ကျေးဇူးတင်ပါသည်။",
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          msg: data.message || "တစ်ခုခုမှားယွင်းနေပါသည်။",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        msg: "Server နှင့် ချိတ်ဆက်မှု မအောင်မြင်ပါ။",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    status,
    handleChange,
    handleSubmit,
  };
}
