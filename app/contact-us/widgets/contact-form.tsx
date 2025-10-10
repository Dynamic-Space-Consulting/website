"use client";

import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// ✅ Validation schema
const contactSchema = z.object({
  fullname: z.string().min(2, "Fullname is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Please enter a subject"),
  organization: z.string().optional(),
  position: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (data: ContactFormInputs) => {
    setLoading(true);
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.ok) {
        reset();
        toast.success('Message sent successfully!');
      } else {
        toast.error('Failed to send message.');
      }
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="bg-[#CAD4DC] rounded-xl p-8 md:py-20 md:px-20 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 shadow-sm my-20">
      {/* Left Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Send Us A Message
        </h2>
        <p className="text-[#4A5568] mb-6">
          Have a bold idea? Need sustainable funding? We’d love to partner with
          you. Fill out the form or reach us directly, and let’s take the first
          step toward funding your vision.
        </p>

        <div className="relative">
          <div className="absolute -bottom-4 -left-4 w-[90%] h-[90%] bg-[#0A3D62] rounded-lg"></div>
          <Image
            src="/contact.png"
            alt="Office"
            className="relative rounded-lg z-10 mt-4"
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Right Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 space-y-4 bg-[#CAD4DC]"
      >
        <div>
          <label className="block font-semibold mb-1 text-[#1A202C]">
            Fullname <span className="text-teal-600">*</span>
          </label>
          <input
            {...register("fullname")}
            placeholder="John Brown"
            className="w-full bg-white border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow outline-none placeholder:font-normal placeholder:text-[#C6C6C7] placeholder:text-sm"
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullname.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#1A202C]">
            Email Address <span className="text-teal-600">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="johnbrown@gmail.com"
            className="w-full border bg-white border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow outline-none placeholder:font-normal placeholder:text-[#C6C6C7] placeholder:text-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#1A202C]">
            Request/Subject <span className="text-teal-600">*</span>
          </label>
          <input
            {...register("subject")}
            placeholder="Request For Grant Writing For My Startup"
            className="w-full border bg-white border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow outline-none placeholder:font-normal placeholder:text-[#C6C6C7] placeholder:text-sm"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#1A202C]">
            Organization
          </label>
          <input
            {...register("organization")}
            placeholder="Amazon"
            className="w-full border bg-white border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow outline-noneplaceholder:font-normal placeholder:text-[#C6C6C7] placeholder:text-sm"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#1A202C]">
            Position
          </label>
          <input
            {...register("position")}
            placeholder="General Manager"
            className="w-full border bg-white border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow outline-none placeholder:font-normal placeholder:text-[#C6C6C7] placeholder:text-sm"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#1A202C]">
            Message <span className="text-teal-600">*</span>
          </label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Write your message here..."
            className="w-full border bg-white border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-yellow outline-none placeholder:font-normal placeholder:text-[#C6C6C7] placeholder:text-sm"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
        >
         {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
