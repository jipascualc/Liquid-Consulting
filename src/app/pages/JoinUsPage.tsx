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
    // Handle form submission
    alert("Thank you for your application! We will review your information and get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d1c36] to-[#1a2f4d] text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              This questionnaire is to be used when recruiting new employees and vendors. Areas of high significance for a job in Liquid are included. Your answers will help both you and us to evaluate if a future in our company is a suitable match.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Information About the Recruit */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">INFORMATION ABOUT THE RECRUIT</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    First name <span className="text-[#ff6c19]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Last Name<span className="text-[#ff6c19]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Date and place for this questionnaire</label>
                <input
                  type="text"
                  name="datePlace"
                  value={formData.datePlace}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                />
              </div>
            </motion.div>

            {/* Areas & Questions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">AREAS & QUESTIONS</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Please explain why you are interested to work with Liquid</label>
                  <input
                    type="text"
                    name="whyLiquid"
                    value={formData.whyLiquid}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Where do you live today?</label>
                  <input
                    type="text"
                    name="whereYouLive"
                    value={formData.whereYouLive}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">How long time does it take you to get to nearest airport?</label>
                  <input
                    type="text"
                    name="airportTime"
                    value={formData.airportTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Which route would you travel from home, for an international assignment?</label>
                  <input
                    type="text"
                    name="travelRoute"
                    value={formData.travelRoute}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
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
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">FAMILY SITUATION</h2>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Please tell us a little bit about your family situation</label>
                <textarea
                  name="familySituation"
                  value={formData.familySituation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent resize-none"
                />
              </div>
            </motion.div>

            {/* Personal Interests */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">PERSONAL INTERESTS</h2>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Please tell us something about your personal interests and hobbies</label>
                <input
                  type="text"
                  name="personalInterests"
                  value={formData.personalInterests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                />
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">EDUCATION</h2>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Which type of education do you have, that could be helpful when working in Liquid?</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                />
              </div>
            </motion.div>

            {/* Previous Work */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">PREVIOUS WORK</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">What do you do for work today and in which company?</label>
                  <input
                    type="text"
                    name="currentWork"
                    value={formData.currentWork}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Why do you want to leave your present job?</label>
                  <input
                    type="text"
                    name="whyLeave"
                    value={formData.whyLeave}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
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
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">FIELD WORK EXPERIENCE</h2>
              <p className="text-gray-700 mb-4">Working with Liquid means a lot of Field Work and Travel.</p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">What do you like with working in the field and travel?</label>
                  <input
                    type="text"
                    name="fieldWorkLike"
                    value={formData.fieldWorkLike}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Which type of field work experience do you have?</label>
                  <input
                    type="text"
                    name="fieldWorkExperience"
                    value={formData.fieldWorkExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
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
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">TRAVEL EXPERIENCE</h2>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Please tell us about your Travel experience. You may include both private and work-related travelling</label>
                <input
                  type="text"
                  name="travelExperience"
                  value={formData.travelExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                />
              </div>
            </motion.div>

            {/* Motivation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">MOTIVATION</h2>
              <div>
                <label className="block text-sm text-gray-700 mb-2">What motivates you to make a good job?</label>
                <input
                  type="text"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                />
              </div>
            </motion.div>

            {/* Drive */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">DRIVE</h2>
              <p className="text-gray-700 mb-4">
                Working with Liquid means that you need to take responsibility for planning your missions. Work tasks, travel arrangements and reporting. It also means that you are responsible for your own competence development.
              </p>
              <div>
                <label className="block text-sm text-gray-700 mb-2">How do you feel about taking such responsibility, driving yourself forward?</label>
                <input
                  type="text"
                  name="responsibility"
                  value={formData.responsibility}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                />
              </div>
            </motion.div>

            {/* Discipline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">DISCIPLINE</h2>
              <p className="text-gray-700 mb-4">
                Our company is well-known for good reporting and timeliness delivery. We are writing daily and weekly reports and try our best to deliver all our support in a professional manner according to agreement.
              </p>
              <div>
                <label className="block text-sm text-gray-700 mb-2">What is your thinking about discipline at work?</label>
                <input
                  type="text"
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                />
              </div>
            </motion.div>

            {/* Flexibility */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">FLEXIBILITY</h2>
              <p className="text-gray-700 mb-4">
                One of our most competitive strengths in Liquid is our quick response. We accept missions with short notice and travel sometimes within hours. Spending days at home and at the same time be prepared to travel on short notice.
              </p>
              <div>
                <label className="block text-sm text-gray-700 mb-2">How do you feel about being flexible, standby for missions on short notice?</label>
                <input
                  type="text"
                  name="flexibility"
                  value={formData.flexibility}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                />
              </div>
            </motion.div>

            {/* Teamwork */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">TEAMWORK</h2>
              <p className="text-gray-700 mb-4">
                We have a great teamwork culture in Liquid. Everyone tries their best to support colleagues on missions. We believe that sharing our knowledge with each other can solve many problematic situations.
              </p>
              <div>
                <label className="block text-sm text-gray-700 mb-2">How do you like to contribute to our Teamwork?</label>
                <input
                  type="text"
                  name="teamwork"
                  value={formData.teamwork}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                />
              </div>
            </motion.div>

            {/* Professional Interest */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">PROFESSIONAL INTEREST</h2>
              <div>
                <label className="block text-sm text-gray-700 mb-2">What would you like to work with, if you may choose anything?</label>
                <input
                  type="text"
                  name="professionalInterest"
                  value={formData.professionalInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                />
              </div>
            </motion.div>

            {/* Future Ambition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">FUTURE AMBITION</h2>
              <div>
                <label className="block text-sm text-gray-700 mb-2">What would you like to develop into within 3-5 years?</label>
                <input
                  type="text"
                  name="futureAmbition"
                  value={formData.futureAmbition}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                />
              </div>
            </motion.div>

            {/* Travelling Arrangements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">TRAVELLING ARRANGEMENTS</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-3">Do you have a valid passport?</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasPassport"
                        value="yes"
                        checked={formData.hasPassport === "yes"}
                        onChange={() => handleRadioChange("yes")}
                        className="w-5 h-5 border-2 border-gray-400 appearance-none rounded-full checked:border-[#ff6c19] checked:border-[6px] focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:ring-offset-2 cursor-pointer transition-all"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasPassport"
                        value="no"
                        checked={formData.hasPassport === "no"}
                        onChange={() => handleRadioChange("no")}
                        className="w-5 h-5 border-2 border-gray-400 appearance-none rounded-full checked:border-[#ff6c19] checked:border-[6px] focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:ring-offset-2 cursor-pointer transition-all"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Do you have any restrictions to apply for visa of any country? If yes, please explain.</label>
                  <textarea
                    name="visaRestrictions"
                    value={formData.visaRestrictions}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent resize-none"
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
              <h2 className="text-2xl font-bold text-[#0d1c36] mb-6">ANYTHING ELSE YOU WOULD LIKE TO MENTION</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Your message</label>
                  <textarea
                    name="additionalMessage"
                    value={formData.additionalMessage}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Number</label>
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Start date</label>
                  <input
                    type="text"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    placeholder="dd-MMM-yyyy"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Link to resume</label>
                  <input
                    type="url"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Upload Resume <span className="text-[#ff6c19]">*</span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6c19] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#ff6c19] file:text-white hover:file:bg-[#e55a0a] file:cursor-pointer"
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
                className="bg-[#ff6c19] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#e55a0a] transition-colors duration-300 shadow-lg hover:shadow-xl"
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
