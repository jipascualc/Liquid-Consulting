import { X } from "lucide-react";
import { useState } from "react";

interface RequestSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const reasons = [
  "Emergency Support",
  "Service Contract",
  "Commissioning",
  "Food Safety",
  "Legacy Upgrade",
  "Automation",
  "Liquid Engineering",
  "General Inquiry",
];

export function RequestSupportModal({ isOpen, onClose }: RequestSupportModalProps) {
  const [formData, setFormData] = useState({
    reason: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ reason: "", name: "", company: "", email: "", phone: "", message: "" });
    onClose();
  };

  if (!isOpen) return null;

  const inputClasses = "w-full px-4 py-3 border border-[#E0E4EA] rounded-lg bg-[#F0F2F5] text-[#0A1628] placeholder-[#6B7A8D] focus:outline-none focus:ring-2 focus:ring-[#2D4A6F] focus:border-transparent";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
        {/* Header */}
        <div className="px-10 pt-10 pb-0 flex items-start justify-between">
          <div>
            <h2 className="text-[#0A1628] text-2xl font-bold mb-2">Request Support</h2>
            <p className="text-[#6B7A8D] leading-relaxed">
              Tell us what you need. We'll get back to you within one business day — or within the hour for emergencies.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#6B7A8D] hover:text-[#0A1628] transition-colors ml-4 mt-1 shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-10 pt-8 pb-10">
          {/* Radio Group */}
          <div className="mb-8">
            <p className="font-mono text-xs tracking-[3px] uppercase text-[#6B7A8D] mb-5">
              How can we help?
            </p>
            <div className="space-y-3">
              {reasons.map((reason) => (
                <label key={reason} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="reason"
                    value={reason}
                    checked={formData.reason === reason}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 border-2 border-[#D0D4DB] appearance-none rounded-full checked:border-[#2D4A6F] checked:border-[6px] focus:outline-none cursor-pointer transition-all"
                  />
                  <span className="text-[#0A1628] group-hover:text-[#2D4A6F] transition-colors">
                    {reason}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Name & Company */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-[#2D4A6F] mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={inputClasses}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D4A6F] mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className={inputClasses}
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-[#2D4A6F] mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={inputClasses}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D4A6F] mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={inputClasses}
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-[#2D4A6F] mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="Describe your situation..."
              className={`${inputClasses} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-[#0A1628] text-white rounded-lg font-semibold hover:bg-[#162036] transition-colors"
          >
            Send Request &rarr;
          </button>
        </form>
      </div>
    </div>
  );
}
