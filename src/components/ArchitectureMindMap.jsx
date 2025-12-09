import React, { useState } from 'react';

const ArchitectureMindMap = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    core: true,
    coaching: true,
    users: true,
    platforms: true,
    cloud: true,
    payments: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const nodeDetails = {
    'ai-agent': {
      title: 'AI Coaching Agent',
      description: 'Core conversational AI that provides personalized coaching experiences',
      features: ['Natural Language Processing', 'Context Awareness', 'Personality Adaptation', 'Goal Tracking']
    },
    'single-coach': {
      title: 'Single Coach Mode',
      description: 'One AI coach per user session for focused, consistent guidance',
      features: ['Dedicated personality', 'Session continuity', 'Deep personalization', 'Progress tracking']
    },
    'double-coach': {
      title: 'Double Coach Mode',
      description: 'Two AI coaches collaborate for diverse perspectives',
      features: ['Complementary styles', 'Debate/discussion mode', 'Broader insights', 'Role specialization']
    },
    'men': {
      title: 'Male Users Profile',
      description: 'Tailored coaching approach for male users',
      features: ['Communication style adaptation', 'Goal-oriented metrics', 'Achievement tracking']
    },
    'women': {
      title: 'Female Users Profile',
      description: 'Tailored coaching approach for female users',
      features: ['Empathetic communication', 'Holistic wellness', 'Support networks']
    },
    'neutral': {
      title: 'Neutral Profile',
      description: 'Gender-neutral coaching approach',
      features: ['Inclusive language', 'Universal frameworks', 'Adaptive responses']
    },
    'gcp': {
      title: 'Google Cloud Platform',
      description: 'Primary cloud infrastructure provider',
      features: ['Cloud Run', 'Vertex AI', 'Cloud Functions', 'Firestore', 'Cloud Translation API']
    },
    'stripe': {
      title: 'Stripe Payments',
      description: 'Payment processing and subscription management',
      features: ['Subscription billing', 'Payment intents', 'Webhooks', 'Customer portal']
    },
    'translation': {
      title: 'Translation Studio',
      description: 'Multi-language support in cloud environment',
      features: ['Google Cloud Translation', 'Real-time translation', 'Language detection', '100+ languages']
    },
    'ios': {
      title: 'iOS App (Apple)',
      description: 'Native iOS application',
      features: ['Swift/SwiftUI', 'App Store distribution', 'Push notifications', 'HealthKit integration']
    },
    'android': {
      title: 'Android App',
      description: 'Native Android application',
      features: ['Kotlin', 'Play Store distribution', 'Firebase messaging', 'Google Fit integration']
    }
  };

  const NodeCard = ({ id, label, color, icon, x, y, size = 'normal' }) => {
    const isActive = activeNode === id;
    const sizeClasses = {
      large: 'w-48 h-20',
      normal: 'w-40 h-16',
      small: 'w-36 h-14'
    };
    
    return (
      <div
        className={`absolute cursor-pointer transition-all duration-300 ${sizeClasses[size]} rounded-2xl flex items-center justify-center gap-2 font-semibold text-sm shadow-lg hover:scale-110 hover:shadow-xl ${isActive ? 'ring-4 ring-white ring-opacity-50 scale-110' : ''}`}
        style={{
          left: x,
          top: y,
          background: color,
          transform: `translate(-50%, -50%) ${isActive ? 'scale(1.1)' : ''}`,
        }}
        onClick={() => setActiveNode(activeNode === id ? null : id)}
      >
        <span className="text-xl">{icon}</span>
        <span className="text-white drop-shadow-md text-center leading-tight">{label}</span>
      </div>
    );
  };

  const ConnectionLine = ({ x1, y1, x2, y2, color = '#4a5568', dashed = false }) => (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth="2"
      strokeDasharray={dashed ? "8,4" : "0"}
      className="opacity-60"
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 font-sans">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          🤖 AI Coaching Agent Architecture
        </h1>
        <p className="text-indigo-300 text-lg">Interactive Mind Map • Click nodes for details</p>
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">GCP Cloud</span>
          <span className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm">Stripe Payments</span>
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm">Multi-Platform</span>
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Translation Ready</span>
        </div>
      </div>

      <div className="flex gap-6 flex-col lg:flex-row">
        {/* Mind Map Canvas */}
        <div className="flex-1 relative bg-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden" style={{ minHeight: '700px' }}>
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Core to Coaching Modes */}
            <ConnectionLine x1="50%" y1="100" x2="30%" y2="200" color="#8b5cf6" />
            <ConnectionLine x1="50%" y1="100" x2="70%" y2="200" color="#8b5cf6" />
            
            {/* Core to Users */}
            <ConnectionLine x1="50%" y1="100" x2="20%" y2="350" color="#f59e0b" />
            <ConnectionLine x1="50%" y1="100" x2="50%" y2="350" color="#f59e0b" />
            <ConnectionLine x1="50%" y1="100" x2="80%" y2="350" color="#f59e0b" />
            
            {/* Core to Cloud */}
            <ConnectionLine x1="50%" y1="100" x2="25%" y2="500" color="#10b981" />
            <ConnectionLine x1="50%" y1="100" x2="50%" y2="500" color="#06b6d4" />
            <ConnectionLine x1="50%" y1="100" x2="75%" y2="500" color="#ec4899" />
            
            {/* Core to Platforms */}
            <ConnectionLine x1="50%" y1="100" x2="35%" y2="620" color="#6366f1" />
            <ConnectionLine x1="50%" y1="100" x2="65%" y2="620" color="#22c55e" />
            
            {/* GCP to Translation */}
            <ConnectionLine x1="25%" y1="500" x2="50%" y2="500" color="#10b981" dashed />
          </svg>

          {/* Central Node */}
          <NodeCard
            id="ai-agent"
            label="AI Agent Core"
            color="linear-gradient(135deg, #6366f1, #8b5cf6)"
            icon="🧠"
            x="50%"
            y="100px"
            size="large"
          />

          {/* Coaching Modes Section */}
          <div className="absolute left-1/2 top-32 -translate-x-1/2 text-indigo-400 text-xs font-semibold tracking-wider">
            COACHING MODES
          </div>
          <NodeCard
            id="single-coach"
            label="Single Coach"
            color="linear-gradient(135deg, #7c3aed, #a855f7)"
            icon="👤"
            x="30%"
            y="200px"
          />
          <NodeCard
            id="double-coach"
            label="Double Coach"
            color="linear-gradient(135deg, #9333ea, #c026d3)"
            icon="👥"
            x="70%"
            y="200px"
          />

          {/* User Segments Section */}
          <div className="absolute left-1/2 top-64 -translate-x-1/2 text-amber-400 text-xs font-semibold tracking-wider">
            USER PROFILES
          </div>
          <NodeCard
            id="men"
            label="Men"
            color="linear-gradient(135deg, #2563eb, #3b82f6)"
            icon="♂️"
            x="20%"
            y="350px"
            size="small"
          />
          <NodeCard
            id="neutral"
            label="Neutral"
            color="linear-gradient(135deg, #6b7280, #9ca3af)"
            icon="⚪"
            x="50%"
            y="350px"
            size="small"
          />
          <NodeCard
            id="women"
            label="Women"
            color="linear-gradient(135deg, #db2777, #ec4899)"
            icon="♀️"
            x="80%"
            y="350px"
            size="small"
          />

          {/* Cloud Infrastructure Section */}
          <div className="absolute left-1/2 top-96 mt-8 -translate-x-1/2 text-emerald-400 text-xs font-semibold tracking-wider">
            CLOUD & PAYMENTS
          </div>
          <NodeCard
            id="gcp"
            label="Google GCP"
            color="linear-gradient(135deg, #059669, #10b981)"
            icon="☁️"
            x="25%"
            y="500px"
          />
          <NodeCard
            id="translation"
            label="Translation Studio"
            color="linear-gradient(135deg, #0891b2, #06b6d4)"
            icon="🌐"
            x="50%"
            y="500px"
          />
          <NodeCard
            id="stripe"
            label="Stripe"
            color="linear-gradient(135deg, #7c3aed, #a855f7)"
            icon="💳"
            x="75%"
            y="500px"
          />

          {/* Platform Section */}
          <div className="absolute left-1/2 bottom-24 -translate-x-1/2 text-cyan-400 text-xs font-semibold tracking-wider">
            MOBILE PLATFORMS
          </div>
          <NodeCard
            id="ios"
            label="iOS (Apple)"
            color="linear-gradient(135deg, #374151, #4b5563)"
            icon="🍎"
            x="35%"
            y="620px"
          />
          <NodeCard
            id="android"
            label="Android"
            color="linear-gradient(135deg, #15803d, #22c55e)"
            icon="🤖"
            x="65%"
            y="620px"
          />
        </div>

        {/* Details Panel */}
        <div className="w-full lg:w-80 space-y-4">
          {/* Node Details */}
          <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-xl">📋</span> 
              {activeNode ? nodeDetails[activeNode]?.title : 'Select a Node'}
            </h3>
            {activeNode && nodeDetails[activeNode] ? (
              <div className="space-y-3">
                <p className="text-slate-300 text-sm">{nodeDetails[activeNode].description}</p>
                <div>
                  <h4 className="text-indigo-400 text-xs font-semibold mb-2 tracking-wider">KEY FEATURES</h4>
                  <ul className="space-y-1">
                    {nodeDetails[activeNode].features.map((feature, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-slate-500 text-sm">Click on any node in the mind map to see detailed information about that component.</p>
            )}
          </div>

          {/* Setup Steps */}
          <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl p-5 border border-indigo-700/30">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🚀</span> Free Account Setup
            </h3>
            <div className="space-y-3">
              {[
                { step: 1, title: 'GCP Free Tier', desc: 'Create Google Cloud account ($300 credit)' },
                { step: 2, title: 'Stripe Account', desc: 'Setup Stripe with test mode' },
                { step: 3, title: 'Firebase Project', desc: 'Initialize for auth & database' },
                { step: 4, title: 'Enable APIs', desc: 'Vertex AI, Translation, Cloud Run' },
                { step: 5, title: 'Deploy Agent', desc: 'Cloud Run container deployment' }
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-3">
                  <div className="w-7 h-7 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {step}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{title}</p>
                    <p className="text-indigo-300 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Use Case */}
          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-2xl p-5 border border-emerald-700/30">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-xl">💼</span> Business Use Case
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-emerald-200"><strong>Product:</strong> AI Life/Career Coaching App</p>
              <p className="text-emerald-200"><strong>Model:</strong> Freemium + Subscription</p>
              <p className="text-emerald-200"><strong>Target:</strong> Global, Multi-language</p>
              <p className="text-emerald-200"><strong>Revenue:</strong> $9.99-$29.99/month tiers</p>
            </div>
          </div>

          {/* Tech Stack Summary */}
          <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-xl">⚙️</span> Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-700/50 rounded-lg p-2 text-center">
                <p className="text-slate-400">Backend</p>
                <p className="text-white font-medium">GCP Cloud Run</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-2 text-center">
                <p className="text-slate-400">AI/ML</p>
                <p className="text-white font-medium">Vertex AI</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-2 text-center">
                <p className="text-slate-400">Database</p>
                <p className="text-white font-medium">Firestore</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-2 text-center">
                <p className="text-slate-400">Auth</p>
                <p className="text-white font-medium">Firebase Auth</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-2 text-center">
                <p className="text-slate-400">Payments</p>
                <p className="text-white font-medium">Stripe</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-2 text-center">
                <p className="text-slate-400">i18n</p>
                <p className="text-white font-medium">Cloud Translate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Flow */}
      <div className="mt-8 bg-slate-800/50 rounded-3xl p-6 border border-slate-700/50">
        <h3 className="text-xl font-bold text-white mb-6 text-center">📐 System Architecture Flow</h3>
        <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
          {[
            { label: 'Mobile App', icon: '📱', color: 'bg-blue-500' },
            { label: '→', icon: '', color: '' },
            { label: 'Firebase Auth', icon: '🔐', color: 'bg-amber-500' },
            { label: '→', icon: '', color: '' },
            { label: 'Cloud Run API', icon: '⚡', color: 'bg-emerald-500' },
            { label: '→', icon: '', color: '' },
            { label: 'Vertex AI Agent', icon: '🧠', color: 'bg-purple-500' },
            { label: '↔', icon: '', color: '' },
            { label: 'Firestore DB', icon: '💾', color: 'bg-orange-500' },
            { label: '|', icon: '', color: '' },
            { label: 'Translation API', icon: '🌐', color: 'bg-cyan-500' },
            { label: '|', icon: '', color: '' },
            { label: 'Stripe Billing', icon: '💳', color: 'bg-indigo-500' },
          ].map((item, i) => (
            item.color ? (
              <div key={i} className={`${item.color} px-4 py-2 rounded-xl text-white font-medium flex items-center gap-2`}>
                <span>{item.icon}</span>
                {item.label}
              </div>
            ) : (
              <span key={i} className="text-slate-500 text-xl font-bold">{item.label}</span>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchitectureMindMap;
