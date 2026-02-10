import { X } from "lucide-react";
import { useState } from "react";

interface RequestSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RequestSupportModal({ isOpen, onClose }: RequestSupportModalProps) {
  const [formData, setFormData] = useState({
    company: "",
    fullName: "",
    email: "",
    subject: "",
    dueDate: "",
    hour: "01",
    minute: "00",
    period: "AM",
    description: "",
    attachment: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, attachment: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Zoho API
    console.log("Form submitted:", formData);
    // Reset form and close modal
    handleReset();
    onClose();
  };

  const handleReset = () => {
    setFormData({
      company: "",
      fullName: "",
      email: "",
      subject: "",
      dueDate: "",
      hour: "01",
      minute: "00",
      period: "AM",
      description: "",
      attachment: null,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <h2 className="text-[#0d1c36]">RFQ/RFS</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-6">
            {/* Company */}
            <div>
              <label className="block text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                required
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                required
              />
            </div>

            {/* Due Date */}
            <div>
              <label className="block text-gray-700 mb-2">
                Due Date
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                  placeholder="MM/dd/yyyy"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                  required
                />
                <select
                  value={formData.hour}
                  onChange={(e) => handleSelectChange("hour", e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent bg-white"
                >
                  {Array.from({ length: 12 }, (_, i) => {
                    const hour = (i + 1).toString().padStart(2, "0");
                    return <option key={hour} value={hour}>{hour}</option>;
                  })}
                </select>
                <select
                  value={formData.minute}
                  onChange={(e) => handleSelectChange("minute", e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent bg-white"
                >
                  {Array.from({ length: 60 }, (_, i) => {
                    const minute = i.toString().padStart(2, "0");
                    return <option key={minute} value={minute}>{minute}</option>;
                  })}
                </select>
                <select
                  value={formData.period}
                  onChange={(e) => handleSelectChange("period", e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent bg-white"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Attachment */}
            <div>
              <label className="block text-gray-700 mb-2">
                Attachment
              </label>
              <div className="mb-2">
                <label className="inline-block cursor-pointer">
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors">
                    Choose File
                  </span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                  />
                  <span className="ml-3 text-gray-600">
                    {formData.attachment ? formData.attachment.name : "No file chosen"}
                  </span>
                </label>
              </div>
              <p className="text-sm text-gray-500">
                Each of your file(s) can be up to 20MB in size. You can attach as many as 5 files at a time.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="submit"
              className="px-8 py-3 bg-[#ff6c19] text-white rounded-md hover:bg-[#ff8540] transition-colors font-semibold"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-8 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors font-semibold"
            >
              Reset
            </button>
          </div>

          {/* Powered by Zoho */}
          <div className="flex items-center justify-end gap-2 mt-6">
            <span className="text-sm text-gray-600">powered by</span>
            <svg className="h-5" viewBox="0 0 80 24" fill="none">
              <path d="M12 6L2 18h8l10-12h-8z" fill="#00A3E0"/>
            </svg>
          </div>
        </form>

        {/* Close Button at Bottom */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-2.5 border-2 border-[#ff6c19] text-[#ff6c19] rounded-full hover:bg-[#ff6c19]/5 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
