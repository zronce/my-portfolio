"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectLabel, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (value) => {
    setFormData({
      ...formData,
      purpose: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Validate form data
    const { firstname, lastname, email, phone, purpose, message } = formData;
    if (!firstname || !lastname || !email || !phone || !purpose || !message) {
      setMessage("Please fill out all fields before submitting.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setMessage("Your message has been sent successfully!");
      } else {
        setMessage("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      setMessage("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 2.0, duration: 0.4, ease: "easeIn" }}}
      className="py-4">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-4">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent">Let's work together</h3>
              <p className="text-white/60 text-sm">Please fill out the form below to get in touch with me.</p>
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="firstname" type="text" placeholder="First Name" value={formData.firstname} onChange={handleChange} className="text-sm" />
                <Input name="lastname" type="text" placeholder="Last Name" value={formData.lastname} onChange={handleChange} className="text-sm" />
                <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="text-sm" />
                <Input name="phone" type="text" placeholder="Phone" value={formData.phone} onChange={handleChange} className="text-sm" />
              </div>
              {/* select */}
              <Select onValueChange={handleSelect}>
                <SelectTrigger className="w-full text-sm">
                  <SelectValue placeholder="Purpose of Contact" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-sm"></SelectLabel>
                    <SelectItem value="Hiring" className="text-sm">Hiring</SelectItem>
                    <SelectItem value="Collaboration" className="text-sm">Collaboration</SelectItem>
                    <SelectItem value="Inquiries" className="text-sm">Inquiries</SelectItem>
                    <SelectItem value="Others" className="text-sm">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea name="message" className="h-[150px] text-sm" placeholder="Type your message here." value={formData.message} onChange={handleChange} />
              {/* button */}
              <Button size="md" className="max-w-40 text-sm" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {message && <p className="text-sm">{message}</p>}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-4 xl:mb-0">
            <ul className="flex flex-col gap-4">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-[40px] h-[40px] xl:w-[52px] xl:h-[52px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                      <div className="text-[20px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-sm">{item.title}</p>
                      <h3 className="text-lg">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
