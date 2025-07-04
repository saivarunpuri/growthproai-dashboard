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
git clone <your-repo-url>
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

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Push your frontend code to GitHub.
2. On Vercel/Netlify, import your repo and set the environment variable:
   - `VITE_API_URL=https://your-backend.onrender.com`
3. Deploy!

### Backend (Render)

1. Push your backend code to GitHub.
2. On Render, create a new Web Service and connect your repo.
3. Render will set `PORT` automatically.
4. After deployment, copy your backend URL and use it in your frontend's `VITE_API_URL`.

---

## 📝 License

This project is for educational/demo purposes.
