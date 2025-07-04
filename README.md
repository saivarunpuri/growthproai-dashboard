# Mini Local Business SEO Dashboard

A full-stack web application that simulates how small businesses might view their SEO content and Google Business data—one of GrowthProAI's core use cases.

---

## 🚀 Features

- **Responsive React + Tailwind CSS Frontend**

  - Clean, mobile-friendly dashboard UI
  - Business input form (name & location)
  - Simulated Google rating and reviews
  - AI-style SEO headline generation
  - "Regenerate SEO Headline" button
  - Toast notifications for errors (via react-toastify)
  - Loading spinner for async actions

- **Node.js + Express Backend**
  - `POST /business-data` — returns simulated rating, reviews, and a generated headline
  - `GET /regenerate-headline?name=...&location=...` — returns a fresh AI-style headline
  - No database required; all data is simulated

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Icons, React Toastify
- **Backend:** Node.js, Express, CORS

---

## 📦 Installation

### 1. Clone the repository

```sh
(https://github.com/saivarunpuri/growthproai-dashboard)
cd growthproai-dashboard
```

### 2. Install dependencies

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd ../frontend
npm install
```

---

## 🏃‍♂️ Running the App

### 1. Start the backend server

```sh
cd backend
npm run dev
# or
npm start
```

The backend runs on [http://localhost:5000](http://localhost:5000)

### 2. Start the frontend dev server

```sh
cd ../frontend
npm run dev
```

The frontend runs on [http://localhost:5173](http://localhost:5173)

---

## 🌈 Customization

- **Theme:** Uses Tailwind's built-in purple/violet palette for a soft, lavender-inspired look.
- **Headlines:** You can add more headline templates in `backend/server.js`.

---

## 📋 API Endpoints

### `POST /business-data`

**Request Body:**

```json
{ "name": "Cake & Co", "location": "Mumbai" }
```

**Response:**

```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

### `GET /regenerate-headline?name=...&location=...`

**Response:**

```json
{ "headline": "..." }
```

---
