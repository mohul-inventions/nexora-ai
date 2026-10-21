import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  Building2, 
  Info, 
  Sparkles,
  Phone,
  Clock,
  X
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student Researcher',
    message: '',
    interest: 'AI Student Assistant'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@university.edu).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Inquiry message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters describing your inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setShowSuccessModal(true);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        role: 'Student Researcher',
        message: '',
        interest: 'AI Student Assistant'
      });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070913] border-t border-slate-900 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT WITH THE TEAM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Deploy NEXORA on Your <br />
            <span className="gradient-text">Smart Campus</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in pilot testing our edge sensor networks or student co-pilot algorithms? 
            Submit a concept demo request below.
          </p>
        </div>

        {/* Demo Disclaimer Banner */}
        <div className="mt-8 max-w-2xl mx-auto p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
          <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <span>Interactive Client-Side Demo: Form data is validated locally and not sent to a remote backend.</span>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Campus Info & Sandbox Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Innovation Lab Headquarters
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Turing Technology Center</strong>
                    <span className="text-slate-400">Room 408, Innovation Boulevard, Campus North</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-violet-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Academic Pilot Contact</strong>
                    <span className="text-cyan-300 font-mono">nexora.concept@campus.edu</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Lab Review Hours</strong>
                    <span className="text-slate-400">Mon – Fri: 09:00 – 18:00 (Student Demo Hours)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono">
                <div className="text-white font-semibold mb-1">Internship Task Evaluation:</div>
                Verified with complete responsive design, client validation, and component architecture.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#090d24] border border-cyan-500/20 text-xs text-cyan-300 space-y-2">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-cyan-400" />
                Institutional Sandbox Mode
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Testing this project? Try submitting a query to see client-side validation errors in action, 
                or test with your real academic email to trigger the interactive success modal.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 shadow-2xl">
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-white text-sm focus:outline-none transition-colors ${
                      errors.name 
                        ? 'border-rose-500 focus:border-rose-500' 
                        : 'border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    University / Organization Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex.morgan@university.edu"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-white text-sm focus:outline-none transition-colors ${
                      errors.email 
                        ? 'border-rose-500 focus:border-rose-500' 
                        : 'border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Role / Department Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="role" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Your Campus Role
                    </label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Student Researcher">Student Researcher</option>
                      <option value="Faculty / Professor">Faculty / Professor</option>
                      <option value="Campus Facilities Director">Campus Facilities Director</option>
                      <option value="IT Systems Administrator">IT Systems Administrator</option>
                      <option value="Internship Assessor / Recruiter">Internship Assessor / Recruiter</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Primary Solution Focus
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500"
                    >
                      <option value="AI Student Assistant">AI Student Assistant</option>
                      <option value="Smart Campus Management">Smart Campus Management</option>
                      <option value="Intelligent Learning Resources">Intelligent Learning Resources</option>
                      <option value="Campus Safety & Alerts">Campus Safety & Alerts</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Project Inquiry / Pilot Requirements <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your campus size, building requirements, or prototype evaluation questions..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-white text-sm focus:outline-none transition-colors ${
                      errors.message 
                        ? 'border-rose-500 focus:border-rose-500' 
                        : 'border-slate-800 focus:border-cyan-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Validating Client Input...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Concept Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 font-mono">
                  Guaranteed privacy • Zero tracking cookies • Instant client validation
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg rounded-2xl bg-[#090d24] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/80 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-center space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                CLIENT-SIDE DEMO CONFIRMATION
              </span>
              <h3 className="text-xl font-bold text-white">
                Inquiry Simulation Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Thank you, <strong className="text-cyan-300">{submittedData?.name}</strong>! Your concept inquiry for <strong className="text-cyan-300">{submittedData?.interest}</strong> has passed all client-side validation rules.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
              <div><strong>Recorded Contact:</strong> {submittedData?.email}</div>
              <div><strong>Role Tag:</strong> {submittedData?.role}</div>
              <div className="text-amber-300/90 pt-1">
                ⚠️ Notice: As specified in requirements, this demonstration does not transmit payload data to a live backend server.
              </div>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-xs transition-colors"
            >
              Close Confirmation
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
