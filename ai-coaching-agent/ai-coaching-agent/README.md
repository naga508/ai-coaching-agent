# 🤖 AI Coaching Agent Platform

An AI-powered coaching platform built with React, Google Cloud Platform, and Stripe for payments.

![Architecture](./docs/architecture-preview.png)

## 🌟 Features

### Coaching Modes
- **Single Coach** - 1:1 focused AI coaching with consistent personality
- **Double Coach** - Two AI coaches providing complementary perspectives

### User Profiles
- **Men** - Tailored coaching approach for male users
- **Women** - Tailored coaching approach for female users  
- **Neutral** - Gender-neutral, inclusive coaching experience

### Platform Support
- 📱 **iOS** (Apple) - Native Swift/SwiftUI app
- 🤖 **Android** - Native Kotlin app

### Core Capabilities
- 🌐 Multi-language support (100+ languages via Cloud Translation)
- 💳 Stripe subscription billing
- 🔐 Firebase Authentication
- ☁️ Serverless GCP architecture

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    MOBILE CLIENTS                           │
│            iOS (Swift) ◄──────► Android (Kotlin)           │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                 FIREBASE AUTHENTICATION                      │
│         (Email, Google, Apple Sign-in, Anonymous)           │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                  GCP CLOUD RUN (API)                        │
│    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│    │ Single Coach│  │Double Coach │  │ Translation │       │
│    │   Endpoint  │  │  Endpoint   │  │  Endpoint   │       │
│    └─────────────┘  └─────────────┘  └─────────────┘       │
└─────────────────────────┬───────────────────────────────────┘
                          │
         ┌────────────────┼────────────────┐
         ▼                ▼                ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────────┐
│  VERTEX AI  │  │  FIRESTORE  │  │ CLOUD TRANSLATE │
│ (AI Agent)  │  │ (Database)  │  │   (100+ langs)  │
└─────────────┘  └─────────────┘  └─────────────────┘
                          │
                          ▼
               ┌─────────────────┐
               │     STRIPE      │
               │ (Subscriptions) │
               └─────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/ai-coaching-agent.git

# Navigate to project
cd ai-coaching-agent

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## ☁️ GCP Setup (Free Tier)

### 1. Create GCP Account
1. Go to [cloud.google.com](https://cloud.google.com)
2. Sign up for free ($300 credit for 90 days)
3. Create a new project: `ai-coaching-agent`

### 2. Enable Required APIs
```bash
gcloud services enable \
  run.googleapis.com \
  aiplatform.googleapis.com \
  translate.googleapis.com \
  firestore.googleapis.com \
  cloudfunctions.googleapis.com
```

### 3. Setup Firebase
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Add your GCP project
3. Enable Authentication (Email, Google, Apple)
4. Create Firestore database

### 4. Deploy to Cloud Run
```bash
# Build container
gcloud builds submit --tag gcr.io/PROJECT_ID/ai-coach-api

# Deploy
gcloud run deploy ai-coach-api \
  --image gcr.io/PROJECT_ID/ai-coach-api \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

## 💳 Stripe Setup

### 1. Create Stripe Account
1. Go to [stripe.com](https://stripe.com)
2. Create account (use Test Mode for development)

### 2. Get API Keys
```env
STRIPE_PUBLIC_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

### 3. Create Products
```bash
# Free Tier - $0/month
# Pro Tier - $9.99/month  
# Premium Tier - $29.99/month
```

---

## 🌐 Translation Studio Integration

The platform uses Google Cloud Translation API for real-time translation:

```javascript
import { TranslationServiceClient } from '@google-cloud/translate';

const translate = new TranslationServiceClient();

async function translateText(text, targetLanguage) {
  const [response] = await translate.translateText({
    parent: `projects/${projectId}/locations/global`,
    contents: [text],
    mimeType: 'text/plain',
    targetLanguageCode: targetLanguage,
  });
  return response.translations[0].translatedText;
}
```

---

## 📱 Mobile Apps

### iOS (Apple)
- Built with Swift/SwiftUI
- App Store distribution
- HealthKit integration
- Push notifications via APNs

### Android
- Built with Kotlin
- Play Store distribution
- Google Fit integration
- Firebase Cloud Messaging

---

## 💰 Pricing Tiers

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0/mo | 5 sessions/month, single coach |
| **Pro** | $9.99/mo | Unlimited single coach, translation |
| **Premium** | $29.99/mo | Double coach, all languages, priority support |

---

## 📁 Project Structure

```
ai-coaching-agent/
├── src/
│   ├── components/
│   │   └── ArchitectureMindMap.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── index.html
├── docs/
│   └── architecture-preview.png
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🔧 Environment Variables

Create a `.env` file in the root:

```env
# GCP
VITE_GCP_PROJECT_ID=your-project-id
VITE_FIREBASE_API_KEY=your-firebase-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com

# Stripe
VITE_STRIPE_PUBLIC_KEY=pk_test_xxx

# API
VITE_API_URL=https://your-cloud-run-url.run.app
```

---

## 🚢 Deployment

### GitHub Pages (Frontend Demo)
The project auto-deploys to GitHub Pages on push to `main` branch.

### Cloud Run (Production API)
Use the included GitHub Actions workflow for CI/CD.

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- [GCP Console](https://console.cloud.google.com)
- [Stripe Dashboard](https://dashboard.stripe.com)
- [Firebase Console](https://console.firebase.google.com)
- [Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs)

---

Built with ❤️ using React, GCP, and Stripe
