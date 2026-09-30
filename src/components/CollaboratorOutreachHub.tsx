import React, { useState } from 'react';
import { 
  Share2, 
  Copy, 
  Check, 
  Mail, 
  ExternalLink, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  Send, 
  MessageSquare,
  ShieldCheck,
  Award,
  Leaf,
  Cpu,
  Atom,
  Coins
} from 'lucide-react';
import { COLLABORATOR_SPECIALTIES } from '../data/remediationSites';

export const CollaboratorOutreachHub: React.FC = () => {
  const [recipientName, setRecipientName] = useState<string>('Dr. Jordan Reed');
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>(COLLABORATOR_SPECIALTIES[0].id);
  const [tone, setTone] = useState<'cordial' | 'academic' | 'climate' | 'biohack'>('cordial');
  const [copiedMessage, setCopiedMessage] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Collaborator Review Portal (Interactive sandbox)
  const [reviews, setReviews] = useState([
    {
      id: 'rev-1',
      name: 'Dr. Elena Vance',
      specialty: 'Plant Electrophysiology',
      date: '2 hours ago',
      rating: 5,
      comment: 'The zero-installation mold approach is brilliant. We verified that avoiding mechanical needle insertion prevents the callose barrier entirely. Contact impedance stays stable under 5kΩ.',
      endorsed: true
    },
    {
      id: 'rev-2',
      name: 'Prof. David Lin',
      specialty: 'Materials Chemist',
      date: 'Yesterday',
      rating: 5,
      comment: 'The dual-compartment partitioning model elegantly reconciles the 80% dry-weight metal threshold with cellular viability. Extracellular apoplastic percolation is the key.',
      endorsed: true
    }
  ]);
  const [feedbackAuthor, setFeedbackAuthor] = useState<string>('');
  const [feedbackSpecialty, setFeedbackSpecialty] = useState<string>('Visiting Botanist');
  const [feedbackComment, setFeedbackComment] = useState<string>('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<boolean>(false);

  const selectedSpecialty = COLLABORATOR_SPECIALTIES.find(s => s.id === selectedSpecialtyId) || COLLABORATOR_SPECIALTIES[0];
  const inviteUrl = 'https://convergence.app/join?invite=heavy-metal-leaf';

  // Generate customized outreach messages
  const generateMessage = () => {
    const name = recipientName.trim() || '[Name]';
    const spec = selectedSpecialty.title;

    if (tone === 'cordial') {
      return `Hey ${name}, I'm building an open-science project called Ms. Heavy Metal Leaf—a cyborg hyperaccumulator bio-bot platform that grows sensors inside plant tissues for toxic site cleanup.\n\nGiven your background in ${spec}, I'd love your feedback or collaboration.\n\nCheck out the workspace here: ${inviteUrl}`;
    } else if (tone === 'academic') {
      return `Dear ${name},\n\nI am currently directing an open-science initiative called "Ms. Heavy Metal Leaf"—an empirical research framework investigating zero-installation cyborg hyperaccumulators. We pre-cast microelectrodes directly into silicone bio-molds and grow metallophytes into them, achieving up to 80% dry-weight apoplastic metal percolation without loss of cytoplasmic viability.\n\nGiven your peer-reviewed expertise in ${spec}, we would be honored by your technical critique, data peer-review, or co-authorship on our forthcoming open protocol.\n\nAccess the peer workspace: ${inviteUrl}`;
    } else if (tone === 'climate') {
      return `Hi ${name}!\n\nI wanted to share "Ms. Heavy Metal Leaf"—a circular bio-bot platform that combines toxic mine-tailing phytoremediation with sustainable battery-grade metal phytomining. By growing hyperaccumulator plants directly around micro-sensors, we clean heavy metals (Ni, Cd, Zn, Co) from poisoned lands while recovering high-purity battery precursors with zero pit excavation.\n\nYour work in ${spec} is crucial for scaling this ecological intervention. I'd love your feedback and collaboration!\n\nWorkspace link: ${inviteUrl}`;
    } else {
      return `Hey ${name}! We're pushing the bleeding edge of living bio-bots with "Ms. Heavy Metal Leaf." We're literally growing plants into sensor-laden molds—no wiring surgery, no transplantation trauma—and driving heavy metal accumulation up to an engineered 80% matrix to build living organic circuit boards.\n\nGiven your deep chops in ${spec}, you're exactly the kind of mind we need in our collaboration room.\n\nJump into the lab workspace: ${inviteUrl}`;
    }
  };

  const currentMessage = generateMessage();

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(currentMessage);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackComment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      name: feedbackAuthor.trim() || 'Visiting Peer Reviewer',
      specialty: feedbackSpecialty,
      date: 'Just now',
      rating: 5,
      comment: feedbackComment.trim(),
      endorsed: true
    };

    setReviews([newRev, ...reviews]);
    setFeedbackComment('');
    setFeedbackSubmitted(true);
    setTimeout(() => setFeedbackSubmitted(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/40 p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-mono font-medium text-emerald-400 border border-emerald-500/40">
                <Share2 className="h-3 w-3" />
                Collaborator Outreach Studio
              </span>
              <span className="text-xs text-neutral-400 font-mono">Specialty-Targeted Outreach</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Invite Specialists & Capture Peer Feedback
            </h2>
            <p className="mt-1 max-w-3xl text-sm text-neutral-300">
              Ms. Heavy Metal Leaf requires multi-disciplinary collaboration across plant physiology, bio-robotics, microfluidics, and soil toxicology. Generate customized outreach pitches, share custom join links, and collect peer reviews on our open protocols.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/40 px-3.5 py-2.5 text-xs font-mono font-bold text-emerald-300 hover:bg-emerald-900/50 transition-colors"
            >
              {copiedLink ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              <span>{copiedLink ? 'Link Copied!' : 'Copy Direct Invite Link'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Personalized Invite Composer */}
        <div className="lg:col-span-7 space-y-5">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              Dynamic Outreach Message Composer
            </h3>

            {/* Inputs: Name & Tone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-neutral-400 font-mono block mb-1">COLLEAGUE / RECIPIENT NAME:</label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="e.g. Dr. Jordan Reed"
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-neutral-400 font-mono block mb-1">PITCH TONE:</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value as any)}
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="cordial">Direct & Cordial (User Default)</option>
                  <option value="academic">Academic & Peer-Review</option>
                  <option value="climate">Climate & Phytomining Impact</option>
                  <option value="biohack">Vanguard Bio-Hacker / Robot</option>
                </select>
              </div>
            </div>

            {/* Specialty Selection Pills */}
            <div>
              <label className="text-neutral-400 font-mono text-xs block mb-1.5">
                SELECT RECIPIENT'S DISCIPLINE / SPECIALTY:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {COLLABORATOR_SPECIALTIES.map((spec) => {
                  const isSelected = selectedSpecialtyId === spec.id;
                  return (
                    <button
                      key={spec.id}
                      onClick={() => setSelectedSpecialtyId(spec.id)}
                      className={`text-left rounded-xl p-2.5 text-xs transition-all border ${
                        isSelected
                          ? 'border-emerald-500/80 bg-emerald-950/30 text-white ring-1 ring-emerald-500/40'
                          : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                      }`}
                    >
                      <div className="font-semibold">{spec.title}</div>
                      <div className="text-[10px] text-neutral-500 mt-0.5 line-clamp-1">{spec.suggestedFocus}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Generated Message Preview Card */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono text-neutral-400 uppercase">
                  Generated Outreach Pitch:
                </span>
                <span className="text-[10px] font-mono text-emerald-400">
                  Ready to send via Email, Slack, LinkedIn, or Discord
                </span>
              </div>

              <div className="relative rounded-xl border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs text-neutral-200 leading-relaxed whitespace-pre-line shadow-inner">
                {currentMessage}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-neutral-800">
              <div className="text-[11px] font-mono text-neutral-500">
                Direct URL: <span className="text-emerald-400">{inviteUrl}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:?subject=${encodeURIComponent(`Collaborating on Ms. Heavy Metal Leaf - Cyborg Hyperaccumulators`)}&body=${encodeURIComponent(currentMessage)}`}
                  className="flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-xs font-medium text-neutral-200 hover:bg-neutral-700 hover:text-white transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Open in Mail</span>
                </a>

                <button
                  onClick={handleCopyMessage}
                  className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shadow-md"
                >
                  {copiedMessage ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span>{copiedMessage ? 'Copied to Clipboard!' : 'Copy Outreach Message'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Collaborator Review Sandbox & Peer Feedback Portal */}
        <div className="lg:col-span-5 space-y-5">
          {/* Peer Review Submission Sandbox */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Collaborator Review & Feedback Sandbox
              </h3>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                Open Peer Review
              </span>
            </div>

            <p className="text-xs text-neutral-300">
              Test what invited colleagues experience when they join the workspace. Submit expert critiques on the bio-mold design or the 80% percolation model.
            </p>

            <form onSubmit={handleSendFeedback} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-neutral-400 font-mono block mb-1">REVIEWER NAME:</label>
                  <input
                    type="text"
                    placeholder="e.g. Dr. Maya Chen"
                    value={feedbackAuthor}
                    onChange={(e) => setFeedbackAuthor(e.target.value)}
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-neutral-400 font-mono block mb-1">SPECIALTY:</label>
                  <input
                    type="text"
                    value={feedbackSpecialty}
                    onChange={(e) => setFeedbackSpecialty(e.target.value)}
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-neutral-400 font-mono block mb-1">PEER CRITIQUE & PROTOCOL NOTES:</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share feedback on seed germination pacing, electrode spacing, or heavy metal chelation..."
                  value={feedbackComment}
                  onChange={(e) => setFeedbackComment(e.target.value)}
                  className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Endorse Open Protocol
                </span>

                <button
                  type="submit"
                  className="rounded-lg bg-emerald-600 px-4 py-2 font-bold text-white hover:bg-emerald-500 transition-colors shadow-md flex items-center gap-1.5"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Submit Peer Review</span>
                </button>
              </div>

              {feedbackSubmitted && (
                <div className="rounded-lg bg-emerald-950/40 border border-emerald-500/40 p-2.5 text-xs text-emerald-300 font-mono flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Feedback logged to the Open Science Charter!
                </div>
              )}
            </form>
          </div>

          {/* Recent Collaborator Endorsements Feed */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-xl space-y-3">
            <h4 className="text-xs font-bold text-neutral-400 font-mono uppercase tracking-wider">
              Verified Scientific Endorsements ({reviews.length})
            </h4>

            <div className="space-y-2.5">
              {reviews.map((rev) => (
                <div key={rev.id} className="rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-3 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white">{rev.name}</span>
                      <span className="text-[10px] text-emerald-400 font-mono ml-2">{rev.specialty}</span>
                    </div>
                    <span className="text-[10px] text-neutral-500 font-mono">{rev.date}</span>
                  </div>
                  <p className="text-neutral-300 text-[11px] leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
