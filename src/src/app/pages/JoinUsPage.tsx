import { useState } from "react";
import { motion } from "motion/react";

export function JoinUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    datePlace: "",
    whyLiquid: "",
    whereYouLive: "",
    airportTime: "",
    travelRoute: "",
    familySituation: "",
    personalInterests: "",
    education: "",
    currentWork: "",
    whyLeave: "",
    fieldWorkLike: "",
    fieldWorkExperience: "",
    travelExperience: "",
    motivation: "",
    responsibility: "",
    discipline: "",
    flexibility: "",
    teamwork: "",
    professionalInterest: "",
    futureAmbition: "",
    hasPassport: "",
    visaRestrictions: "",
    additionalMessage: "",
    email: "",
    phone: "",
    number: "",
    startDate: "",
    resumeLink: "",
    resumeFile: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, hasPassport: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resumeFile: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your application! We will review your information and get back to you soon.");
  };

  const inputClasses = "w-full px-4 py-3 border border-[#E0E4EA] rounded-lg bg-[#F0F2F5] text-[#0A1628] placeholder-[#6B7A8D] focus:outline-none focus:ring-2 focus:ring-[#2D4A6F] focus:border-transparent";
  const textareaClasses = `${inputClasses} resize-none`;

  return (
    <div className="relative pt-[72px]" style={{ backgroundColor: '#0A1628', borderRadius: 0 }}>
      {/* Hero Section */}
      <section className="bg-[#0A1628] text-[#F0F2F5] py-20" style={{ borderRadius: 0 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-[3px] uppercase text-[#8A96A6] mb-4">Careers</p>
            <h1 className="text-5xl font-bold mb-6 tracking-[-2px]">Join Our Team</h1>
            <p className="text-xl text-[#8A96A6] leading-relaxed">
              A short questionnaire to assess fit for roles at Liquid, based on key skills and work areas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#F0F2F5] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Information About the Recruit */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="font-mono text-xs tracking-[3px] uppercase text-[#6B7A8D] mb-3">Personal Details</p>
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Information About the Recruit</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#4B5563] mb-2 font-medium">Date and place for this questionnaire</label>
                <input
                  type="text"
                  name="datePlace"
                  value={formData.datePlace}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </motion.div>

            {/* Areas & Questions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-mono text-xs tracking-[3px] uppercase text-[#6B7A8D] mb-3">Background</p>
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Areas & Questions</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">Please explain why you are interested to work with Liquid</label>
                  <input
                    type="text"
                    name="whyLiquid"
                    value={formData.whyLiquid}
                    onChange={handleInputChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">Where do you live today?</label>
                  <input
                    type="text"
                    name="whereYouLive"
                    value={formData.whereYouLive}
                    onChange={handleInputChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">How long time does it take you to get to nearest airport?</label>
                  <input
                    type="text"
                    name="airportTime"
                    value={formData.airportTime}
                    onChange={handleInputChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">Which route would you travel from home, for an international assignment?</label>
                  <input
                    type="text"
                    name="travelRoute"
                    value={formData.travelRoute}
                    onChange={handleInputChange}
                    className={inputClasses}
                  />
                </div>
              </div>
            </motion.div>

            {/* Family Situation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Family Situation</h2>
              <div>
                <label className="block text-sm text-[#4B5563] mb-2 font-medium">Please tell us a little bit about your family situation</label>
                <textarea
                  name="familySituation"
                  value={formData.familySituation}
                  onChange={handleInputChange}
                  rows={4}
                  className={textareaClasses}
                />
              </div>
            </motion.div>

            {/* Personal Interests */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Personal Interests</h2>
              <div>
                <label className="block text-sm text-[#4B5563] mb-2 font-medium">Please tell us something about your personal interests and hobbies</label>
                <input
                  type="text"
                  name="personalInterests"
                  value={formData.personalInterests}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Education</h2>
              <div>
                <label className="block text-sm text-[#4B5563] mb-2 font-medium">Which type of education do you have, that could be helpful when working in Liquid?</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </motion.div>

            {/* Previous Work */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="font-mono text-xs tracking-[3px] uppercase text-[#6B7A8D] mb-3">Experience</p>
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Previous Work</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">What do you do for work today and in which company?</label>
                  <input
                    type="text"
                    name="currentWork"
                    value={formData.currentWork}
                    onChange={handleInputChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">Why do you want to leave your present job?</label>
                  <input
                    type="text"
                    name="whyLeave"
                    value={formData.whyLeave}
                    onChange={handleInputChange}
                    className={inputClasses}
                  />
                </div>
              </div>
            </motion.div>

            {/* Field Work Experience */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Field Work Experience</h2>
              <p className="text-[#4B5563] mb-4">Working with Liquid means a lot of Field Work and Travel.</p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">What do you like with working in the field and travel?</label>
                  <input
                    type="text"
                    name="fieldWorkLike"
                    value={formData.fieldWorkLike}
                    onChange={handleInputChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">Which type of field work experience do you have?</label>
                  <input
                    type="text"
                    name="fieldWorkExperience"
                    value={formData.fieldWorkExperience}
                    onChange={handleInputChange}
                    className={inputClasses}
                  />
                </div>
              </div>
            </motion.div>

            {/* Travel Experience */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Travel Experience</h2>
              <div>
                <label className="block text-sm text-[#4B5563] mb-2 font-medium">Please tell us about your Travel experience. You may include both private and work-related travelling</label>
                <input
                  type="text"
                  name="travelExperience"
                  value={formData.travelExperience}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </motion.div>

            {/* Motivation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="font-mono text-xs tracking-[3px] uppercase text-[#6B7A8D] mb-3">Mindset</p>
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Motivation</h2>
              <div>
                <label className="block text-sm text-[#4B5563] mb-2 font-medium">What motivates you to make a good job?</label>
                <input
                  type="text"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </motion.div>

            {/* Drive */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Drive</h2>
              <p className="text-[#4B5563] mb-4">
                Working with Liquid means that you need to take responsibility for planning your missions. Work tasks, travel arrangements and reporting. It also means that you are responsible for your own competence development.
              </p>
              <div>
                <label className="block text-sm text-[#4B5563] mb-2 font-medium">How do you feel about taking such responsibility, driving yourself forward?</label>
                <input
                  type="text"
                  name="responsibility"
                  value={formData.responsibility}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </motion.div>

            {/* Discipline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Discipline</h2>
              <p className="text-[#4B5563] mb-4">
                Our company is well-known for good reporting and timeliness delivery. We are writing daily and weekly reports and try our best to deliver all our support in a professional manner according to agreement.
              </p>
              <div>
                <label className="block text-sm text-[#4B5563] mb-2 font-medium">What is your thinking about discipline at work?</label>
                <input
                  type="text"
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </motion.div>

            {/* Flexibility */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Flexibility</h2>
              <p className="text-[#4B5563] mb-4">
                One of our most competitive strengths in Liquid is our quick response. We accept missions with short notice and travel sometimes within hours. Spending days at home and at the same time be prepared to travel on short notice.
              </p>
              <div>
                <label className="block text-sm text-[#4B5563] mb-2 font-medium">How do you feel about being flexible, standby for missions on short notice?</label>
                <input
                  type="text"
                  name="flexibility"
                  value={formData.flexibility}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </motion.div>

            {/* Teamwork */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Teamwork</h2>
              <p className="text-[#4B5563] mb-4">
                We have a great teamwork culture in Liquid. Everyone tries their best to support colleagues on missions. We believe that sharing our knowledge with each other can solve many problematic situations.
              </p>
              <div>
                <label className="block text-sm text-[#4B5563] mb-2 font-medium">How do you like to contribute to our Teamwork?</label>
                <input
                  type="text"
                  name="teamwork"
                  value={formData.teamwork}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </motion.div>

            {/* Professional Interest */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Professional Interest</h2>
              <div>
                <label className="block text-sm text-[#4B5563] mb-2 font-medium">What would you like to work with, if you may choose anything?</label>
                <input
                  type="text"
                  name="professionalInterest"
                  value={formData.professionalInterest}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </motion.div>

            {/* Future Ambition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Future Ambition</h2>
              <div>
                <label className="block text-sm text-[#4B5563] mb-2 font-medium">What would you like to develop into within 3-5 years?</label>
                <input
                  type="text"
                  name="futureAmbition"
                  value={formData.futureAmbition}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </motion.div>

            {/* Travelling Arrangements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <p className="font-mono text-xs tracking-[3px] uppercase text-[#6B7A8D] mb-3">Logistics</p>
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Travelling Arrangements</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-[#4B5563] mb-3 font-medium">Do you have a valid passport?</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasPassport"
                        value="yes"
                        checked={formData.hasPassport === "yes"}
                        onChange={() => handleRadioChange("yes")}
                        className="w-5 h-5 border-2 border-[#D0D4DB] appearance-none rounded-full checked:border-[#2D4A6F] checked:border-[6px] focus:outline-none focus:ring-2 focus:ring-[#2D4A6F] focus:ring-offset-2 focus:ring-offset-[#F0F2F5] cursor-pointer transition-all"
                      />
                      <span className="text-[#4B5563]">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasPassport"
                        value="no"
                        checked={formData.hasPassport === "no"}
                        onChange={() => handleRadioChange("no")}
                        className="w-5 h-5 border-2 border-[#D0D4DB] appearance-none rounded-full checked:border-[#2D4A6F] checked:border-[6px] focus:outline-none focus:ring-2 focus:ring-[#2D4A6F] focus:ring-offset-2 focus:ring-offset-[#F0F2F5] cursor-pointer transition-all"
                      />
                      <span className="text-[#4B5563]">No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">Do you have any restrictions to apply for visa of any country? If yes, please explain.</label>
                  <textarea
                    name="visaRestrictions"
                    value={formData.visaRestrictions}
                    onChange={handleInputChange}
                    rows={4}
                    className={textareaClasses}
                  />
                </div>
              </div>
            </motion.div>

            {/* Anything Else */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              <p className="font-mono text-xs tracking-[3px] uppercase text-[#6B7A8D] mb-3">Final Details</p>
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Anything Else</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">Your message</label>
                  <textarea
                    name="additionalMessage"
                    value={formData.additionalMessage}
                    onChange={handleInputChange}
                    rows={4}
                    className={textareaClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClasses}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#4B5563] mb-2 font-medium">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#4B5563] mb-2 font-medium">Number</label>
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">Start date</label>
                  <input
                    type="text"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    placeholder="dd-MMM-yyyy"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">Link to resume</label>
                  <input
                    type="url"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleInputChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#4B5563] mb-2 font-medium">
                    Upload Resume <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="w-full px-4 py-3 border border-[#E0E4EA] rounded-lg bg-[#F0F2F5] text-[#0A1628] focus:outline-none focus:ring-2 focus:ring-[#2D4A6F] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[rgba(45,74,111,0.08)] file:text-[#2D4A6F] hover:file:bg-[rgba(45,74,111,0.15)] file:cursor-pointer"
                  />
                </div>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="flex justify-center pt-6"
            >
              <button
                type="submit"
                className="bg-[#0A1628] text-[#F0F2F5] px-12 py-4 rounded-lg font-semibold hover:bg-[#162036] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Application
              </button>
            </motion.div>
          </form>
        </div>
      </section>
    </div>
  );
}
