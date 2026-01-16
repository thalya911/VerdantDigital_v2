import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Send, Brain, Clock, Zap, Check } from 'lucide-react';
import { trackModalOpen, trackFormSubmit, trackFormStart } from '../services/analytics';

interface WorkflowAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const painPoints = [
  { id: 'data-entry', label: 'Data entry & copying between systems' },
  { id: 'repetitive-questions', label: 'Answering the same questions' },
  { id: 'report-generation', label: 'Generating reports & summaries' },
  { id: 'email-triage', label: 'Email triage & responses' },
  { id: 'document-processing', label: 'Processing documents & invoices' },
  { id: 'scheduling', label: 'Scheduling & coordination' },
  { id: 'content-creation', label: 'Writing content & copy' },
  { id: 'research', label: 'Research & information gathering' },
];

const commonTools = [
  { id: 'slack', label: 'Slack' },
  { id: 'teams', label: 'Teams' },
  { id: 'google-workspace', label: 'Google Workspace' },
  { id: 'microsoft-365', label: 'Microsoft 365' },
  { id: 'xero', label: 'Xero' },
  { id: 'myob', label: 'MYOB' },
  { id: 'hubspot', label: 'HubSpot' },
  { id: 'salesforce', label: 'Salesforce' },
  { id: 'monday', label: 'Monday.com' },
  { id: 'notion', label: 'Notion' },
  { id: 'asana', label: 'Asana' },
  { id: 'shopify', label: 'Shopify' },
  { id: 'zapier', label: 'Zapier' },
  { id: 'airtable', label: 'Airtable' },
];

const WorkflowAuditModal: React.FC<WorkflowAuditModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);
  const [customPainPoint, setCustomPainPoint] = useState('');
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [customTools, setCustomTools] = useState('');
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: '',
    business: '',
    teamSize: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      trackModalOpen('workflow_audit');
      setHasStartedForm(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const togglePainPoint = (id: string) => {
    if (!hasStartedForm) {
      trackFormStart('workflow_audit');
      setHasStartedForm(true);
    }
    setSelectedPainPoints(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleTool = (id: string) => {
    setSelectedTools(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Compile the data
    const painPointLabels = selectedPainPoints.map(id =>
      painPoints.find(p => p.id === id)?.label || id
    );
    if (customPainPoint) painPointLabels.push(customPainPoint);

    const toolLabels = selectedTools.map(id =>
      commonTools.find(t => t.id === id)?.label || id
    );
    if (customTools) toolLabels.push(customTools);

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          helpWith: 'AI Workflow Audit',
          message: `WORKFLOW AUDIT REQUEST\n\n` +
            `Time-Consuming Tasks:\n${painPointLabels.map(p => `• ${p}`).join('\n')}\n\n` +
            `Current Tools:\n${toolLabels.map(t => `• ${t}`).join('\n')}\n\n` +
            `Team Size: ${formState.teamSize || 'Not specified'}\n\n` +
            `Additional Context:\n${formState.additionalInfo || 'None provided'}`
        }),
      });

      await response.json();

      if (response.ok) {
        trackFormSubmit('workflow_audit', true);
        alert('✓ Audit request received!\n\nWe\'ll analyze your workflow and get back to you within 24 hours with specific recommendations.\n\nCheck your inbox for a confirmation.');
        handleClose();
      } else {
        trackFormSubmit('workflow_audit', false);
        alert('Something went wrong.\n\nPlease try again, or email us directly at hello@verdantdigital.com.au');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Connection error.\n\nPlease check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setStep(1);
      setSelectedPainPoints([]);
      setCustomPainPoint('');
      setSelectedTools([]);
      setCustomTools('');
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredContact: '',
        business: '',
        teamSize: '',
        additionalInfo: ''
      });
    }, 300);
  };

  const canProceedStep1 = selectedPainPoints.length > 0 || customPainPoint.trim().length > 0;
  const canProceedStep2 = selectedTools.length > 0 || customTools.trim().length > 0;
  const canSubmit = formState.firstName && formState.email && formState.phone;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-brand-black/90 backdrop-blur-md"
        onClick={handleClose}
      />

      <div className="relative bg-brand-surface border border-brand-border rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 pb-0 flex-shrink-0">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-brand-muted hover:text-white transition-colors z-10 bg-brand-black/50 rounded-full w-9 h-9 flex items-center justify-center hover:bg-brand-black"
          >
            <X size={18} />
          </button>

          {/* Progress Bar */}
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 h-1 rounded-full overflow-hidden bg-brand-border/50">
                <div
                  className={`h-full transition-all duration-500 ${
                    s <= step ? 'bg-brand-accent' : 'bg-transparent'
                  }`}
                  style={{ width: s < step ? '100%' : s === step ? '50%' : '0%' }}
                />
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-4 text-[11px] text-brand-muted mb-5">
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-brand-accent" />
              Takes 60 seconds
            </span>
            <span className="flex items-center gap-1.5">
              <Zap size={12} className="text-brand-accent" />
              Response in 24hrs
            </span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 pb-5">
          {/* Step 1: Pain Points */}
          {step === 1 && (
            <div className="space-y-5">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-xl mb-4">
                  <Brain size={24} className="text-brand-accent" />
                </div>
                <h2 className="text-xl md:text-2xl font-display font-black text-white mb-2 uppercase">
                  What's Eating Your Time?
                </h2>
                <p className="text-brand-muted text-sm">
                  Select the tasks that slow your team down. We'll show you what AI can automate.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {painPoints.map((point) => (
                  <button
                    key={point.id}
                    type="button"
                    onClick={() => togglePainPoint(point.id)}
                    className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all text-sm ${
                      selectedPainPoints.includes(point.id)
                        ? 'bg-brand-accent/10 border-brand-accent text-white'
                        : 'bg-brand-black/50 border-brand-border/50 text-brand-muted hover:border-brand-border hover:text-white'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all ${
                      selectedPainPoints.includes(point.id)
                        ? 'bg-brand-accent text-brand-black'
                        : 'bg-brand-surface border border-brand-border'
                    }`}>
                      {selectedPainPoints.includes(point.id) && <Check size={14} strokeWidth={3} />}
                    </div>
                    {point.label}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">
                  Something else?
                </label>
                <input
                  type="text"
                  value={customPainPoint}
                  onChange={(e) => setCustomPainPoint(e.target.value)}
                  className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                  placeholder="Describe another time-consuming task..."
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!canProceedStep1}
                className="w-full bg-brand-accent hover:bg-white text-brand-black font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
              >
                Continue
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* Step 2: Tools */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-display font-black text-white mb-2 uppercase">
                  What's Your Tech Stack?
                </h2>
                <p className="text-brand-muted text-sm">
                  Select the tools your team uses. This helps us identify integration points.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {commonTools.map((tool) => (
                  <button
                    key={tool.id}
                    type="button"
                    onClick={() => toggleTool(tool.id)}
                    className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                      selectedTools.includes(tool.id)
                        ? 'bg-brand-accent/10 border-brand-accent text-brand-accent'
                        : 'bg-brand-black/50 border-brand-border/50 text-brand-muted hover:border-brand-border hover:text-white'
                    }`}
                  >
                    {selectedTools.includes(tool.id) && <span className="mr-1">✓</span>}
                    {tool.label}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">
                  Other tools?
                </label>
                <input
                  type="text"
                  value={customTools}
                  onChange={(e) => setCustomTools(e.target.value)}
                  className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                  placeholder="List any other software you use..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">
                  Team size <span className="text-[10px]">(Optional)</span>
                </label>
                <select
                  name="teamSize"
                  value={formState.teamSize}
                  onChange={handleChange}
                  className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all h-[46px] text-sm pr-10"
                >
                  <option value="">Select team size</option>
                  <option value="Just me">Just me</option>
                  <option value="2-5">2-5 people</option>
                  <option value="6-20">6-20 people</option>
                  <option value="21-50">21-50 people</option>
                  <option value="50+">50+ people</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-transparent border border-brand-border hover:border-brand-accent text-white font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!canProceedStep2}
                  className="flex-[2] bg-brand-accent hover:bg-white text-brand-black font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                >
                  Continue
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-display font-black text-white mb-2 uppercase">
                  Where Should We Send the Audit?
                </h2>
                <p className="text-brand-muted text-sm">
                  Last step. We'll email you with specific automation recommendations.
                </p>
              </div>

              {/* Summary of selections */}
              <div className="bg-brand-black/50 border border-brand-border/30 rounded-lg p-4 space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Pain Points</span>
                  <p className="text-white text-sm mt-1">
                    {[
                      ...selectedPainPoints.map(id => painPoints.find(p => p.id === id)?.label),
                      customPainPoint
                    ].filter(Boolean).join(', ') || 'None selected'}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Tools</span>
                  <p className="text-white text-sm mt-1">
                    {[
                      ...selectedTools.map(id => commonTools.find(t => t.id === id)?.label),
                      customTools
                    ].filter(Boolean).join(', ') || 'None selected'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                  placeholder="john@company.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                    placeholder="0400 000 000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Business</label>
                  <input
                    type="text"
                    name="business"
                    value={formState.business}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm"
                    placeholder="Acme Inc."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">
                  Anything else we should know? <span className="text-[10px]">(Optional)</span>
                </label>
                <textarea
                  name="additionalInfo"
                  value={formState.additionalInfo}
                  onChange={handleChange}
                  className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-3 outline-none transition-all text-sm resize-none"
                  placeholder="Any additional context..."
                  rows={2}
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 bg-transparent border border-brand-border hover:border-brand-accent text-white font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                  className="flex-[2] bg-brand-accent hover:bg-white text-brand-black font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Free Audit'}
                  {!isSubmitting && <Send size={16} />}
                </button>
              </div>

              <p className="text-center text-[11px] text-brand-muted/60">
                No spam. Just actionable insights within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkflowAuditModal;
