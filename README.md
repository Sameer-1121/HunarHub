# 🇮🇳 HunarHub — Empowering Local Skills & Micro-Entrepreneurs

A digital marketplace platform designed to **connect local skilled workers, artisans, small vendors, and customers** through a simple and accessible online platform.

HunarHub helps users discover local entrepreneurs, explore handmade products, request services, place orders, and manage their activities through personalized dashboards.

---

## 🔗 Project Links

🔗 **Live Demo:** Add your Vercel deployment link here

📂 **Repository:** https://github.com/Sameer-1121/HunarHub

---

## 📖 About the Project

**HunarHub** is a community-focused digital marketplace that brings local entrepreneurs and customers together on a single platform.

Many skilled workers such as **cobblers, potters, tailors, artisans, woodcraft workers, home-decor makers, and small vendors** depend heavily on offline customers and word-of-mouth promotion. This limits their reach and makes it difficult for customers to discover trusted local talent.

HunarHub aims to solve this problem by providing a digital platform where entrepreneurs can showcase their skills and products while customers can discover, connect with, and purchase from them.

### 🎯 Problem it Solves

* Local skilled workers often have limited digital visibility
* Customers struggle to discover reliable local artisans and service providers
* Handmade products are scattered across different platforms
* Small entrepreneurs lack an easy-to-use digital marketplace
* Traditional service discovery depends heavily on local networks and word-of-mouth
* There is limited interaction between customers and local micro-entrepreneurs

---

## ✨ Key Features

### 👥 Customer Features

* **User Registration & Login** — Create and manage a personal account
* **Browse Entrepreneurs** — Discover local skilled workers and artisans
* **Search & Filtering** — Search entrepreneurs by name, skill, category, and location
* **Entrepreneur Profiles** — View detailed profiles, experience, services, and ratings
* **Service Requests** — Send service requests directly to entrepreneurs
* **Product Marketplace** — Browse handmade and locally produced products
* **Price Filtering** — Filter products according to different price ranges
* **Product Details** — View product information, maker, price, and rating
* **Shopping Cart** — Add and manage multiple products
* **Checkout** — Review products and place orders
* **Order Tracking** — View placed orders from the dashboard
* **Reviews & Ratings** — Share feedback about entrepreneurs
* **Responsive UI** — Designed for desktop, tablet, and mobile screens

---

### 🧑‍🎨 Entrepreneur Features

* **Entrepreneur Profiles** — Showcase skills, experience, location, and services
* **Service Listings** — Add services that customers can request
* **Listing Management** — Manage available products/services
* **Service Requests** — Receive and manage customer requests
* **Order Management** — Track completed and ongoing orders
* **Dashboard Statistics** — View listings, orders, and earnings
* **Customer Interaction** — Connect with customers through service requests

---

### 🛡️ Admin Features

* **Admin Dashboard** — Centralized platform management
* **Entrepreneur Management** — Review and manage entrepreneur registrations
* **Approve / Reject Entrepreneurs** — Control entrepreneur onboarding
* **Service Request Monitoring** — View recent customer requests
* **Platform Revenue Overview** — View overall product order value
* **User & Marketplace Management** — Manage platform activity from one place

---

## 🏠 Main Sections

### Home Page

The landing page introduces HunarHub with:

* Hero section
* Local skill categories
* How It Works section
* Popular listings
* Platform statistics
* Why Choose HunarHub
* Call-to-action section

### Browse Entrepreneurs

Users can discover local entrepreneurs using:

* Search
* Skill/category filters
* Location filters
* Entrepreneur ratings
* Individual entrepreneur profiles

### Product Marketplace

Customers can explore handmade products using:

* Product cards
* Price filtering
* Product ratings
* Maker information
* Add to Cart functionality
* Product detail pages

### Entrepreneur Profile

Each entrepreneur profile provides:

* Name
* Category
* Location
* Experience
* Biography
* Services offered
* Service prices
* Ratings & reviews
* Service request functionality

### User Dashboard

The dashboard provides users with relevant activity such as:

* Orders
* Service requests
* Listings
* Earnings/statistics
* Request statuses

### Admin Dashboard

The administrator can monitor:

* Entrepreneurs
* Service requests
* Platform activity
* Product orders
* Revenue overview

---

## 🛠️ Tech Stack

| Layer              | Technology                              |
| ------------------ | --------------------------------------- |
| Frontend Framework | React 19                                |
| Build Tool         | Vite                                    |
| Routing            | React Router                            |
| Styling            | CSS / Tailwind-based UI                 |
| Icons              | Lucide React                            |
| State Management   | React Context API                       |
| Authentication     | Context-based authentication            |
| Data Management    | React Context + Local Application State |
| Product Data       | JavaScript Data Modules                 |
| Entrepreneur Data  | JavaScript Data Modules                 |
| Version Control    | Git + GitHub                            |
| Deployment         | Vercel                                  |

> **Note:** This version is primarily a frontend prototype using React Context API and local application state for authentication, listings, orders, requests, reviews, cart, and admin functionality. A production backend can be integrated in the future for persistent multi-user data storage.

---

## 🧩 Application Architecture

HunarHub follows a component-based React architecture.

```text
User
 │
 ▼
React Application
 │
 ├── Pages
 │    ├── Home
 │    ├── Marketplace
 │    ├── Entrepreneurs
 │    ├── Product Details
 │    ├── Entrepreneur Profile
 │    ├── Cart
 │    ├── Checkout
 │    ├── Dashboard
 │    └── Admin Dashboard
 │
 ├── Components
 │    ├── Navbar
 │    ├── Footer
 │    ├── Hero
 │    ├── Categories
 │    ├── Listings
 │    ├── Reviews
 │    └── CTA Sections
 │
 └── Context API
      ├── Authentication
      ├── Cart
      ├── Orders
      ├── Listings
      ├── Requests
      ├── Reviews
      └── Admin
```

---

## 📁 Project Structure

```text
src/
├── assets/
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
│
├── components/
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── Categories.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── PopularListings.jsx
│   │   ├── StatsBanner.jsx
│   │   ├── WhyChooseUs.jsx
│   │   └── CtaBanner.jsx
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   └── ReviewSection.jsx
│
├── context/
│   ├── AuthContext.jsx
│   ├── AdminContext.jsx
│   ├── CartContext.jsx
│   ├── ListingsContext.jsx
│   ├── OrdersContext.jsx
│   ├── RequestsContext.jsx
│   └── ReviewsContext.jsx
│
├── data/
│   ├── entrepreneurs.js
│   └── products.js
│
├── pages/
│   ├── Home.jsx
│   ├── AboutUs.jsx
│   ├── ContactUs.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Dashboard.jsx
│   ├── BrowseEntrepreneurs.jsx
│   ├── EntrepreneurProfile.jsx
│   ├── ProductMarketplace.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── AdminDashboard.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js v18 or higher
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/Sameer-1121/HunarHub.git
```

Navigate into the project:

```bash
cd HunarHub
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔐 User & Admin System

HunarHub includes separate application flows for:

### Customer

Customers can:

* Create an account
* Log in
* Browse entrepreneurs
* Request services
* Browse products
* Add products to cart
* Checkout
* Track orders
* Submit reviews

### Entrepreneur

Entrepreneurs can:

* Manage their profile
* Add/manage listings
* Receive service requests
* View orders
* Monitor dashboard statistics

### Administrator

The admin dashboard provides platform-level management capabilities including:

* Entrepreneur approval/rejection
* Service request monitoring
* Platform activity
* Order/revenue overview

---

## 🛒 Marketplace Flow

The product marketplace follows a simple customer journey:

```text
Browse Products
      ↓
View Product Details
      ↓
Add to Cart
      ↓
Review Cart
      ↓
Checkout
      ↓
Place Order
      ↓
Track Order from Dashboard
```

---

## 🤝 Service Request Flow

Customers can directly connect with local entrepreneurs:

```text
Browse Entrepreneurs
        ↓
Select Entrepreneur
        ↓
View Profile & Services
        ↓
Select Required Service
        ↓
Send Service Request
        ↓
Entrepreneur Receives Request
        ↓
Request Status Updated
```

---

## ⭐ Reviews & Ratings

The platform includes a review system that allows users to provide feedback for entrepreneurs.

Reviews help:

* Build trust between customers and entrepreneurs
* Improve service transparency
* Highlight skilled service providers
* Help future customers make better decisions

---

## 📱 Responsive Design

HunarHub is designed with responsive layouts for:

* 💻 Desktop
* 📱 Mobile
* 📲 Tablet

The interface uses responsive grids, flexible layouts, navigation components, and mobile-friendly cards to provide a consistent experience across screen sizes.

---

## 🔮 Future Enhancements

The current frontend prototype can be extended into a complete production marketplace with:

* Node.js + Express backend
* MongoDB database
* Secure JWT authentication
* Persistent user accounts
* Cloud image storage
* Real payment gateway integration
* Real-time chat between customers and entrepreneurs
* GPS/location-based entrepreneur discovery
* Advanced search and recommendation system
* Entrepreneur verification
* Order delivery tracking
* Notifications
* Multilingual support
* AI-powered skill and product recommendations
* Analytics dashboard for entrepreneurs
* Real-time admin monitoring

---

## 💡 Future Backend Architecture

A planned production architecture could be:

```text
React Frontend
       │
       ▼
Node.js + Express API
       │
       ├── Authentication
       ├── Users
       ├── Entrepreneurs
       ├── Products
       ├── Orders
       ├── Service Requests
       └── Reviews
       │
       ▼
MongoDB Database
```

This would allow HunarHub to support persistent data, multiple users, secure authentication, and real-world marketplace operations.

---

## 🎯 Project Objectives

The main objectives of HunarHub are:

1. Digitize local skills and traditional occupations
2. Increase visibility of local entrepreneurs
3. Connect customers with nearby skilled workers
4. Provide a marketplace for handmade products
5. Create opportunities for micro-entrepreneurs
6. Simplify local service discovery
7. Encourage digital adoption among small businesses
8. Build a scalable platform for India's local talent ecosystem

---

## 🌟 Why HunarHub?

Unlike a traditional e-commerce platform, HunarHub focuses on **people and their skills**, not just products.

The platform combines:

**Local Skills + Services + Handmade Products + Digital Marketplace**

This creates a single ecosystem where customers can discover local talent while entrepreneurs get an opportunity to showcase and grow their businesses digitally.

---

## 📋 Project Status

**Status:** ✅ Frontend Prototype Completed

**Build Status:** ✅ Production Build Successful

**Deployment:** 🚀 Ready for Deployment

**Version:** 1.0.0

---

## 👤 Author

**Sameer**

B.Tech CSE Student
Maharishi Markandeshwar (Deemed to be University)

GitHub: https://github.com/Sameer-1121

---

## 📄 License

This project was developed for **educational and project submission purposes**.

---

## 🙏 Acknowledgement

This project was developed as an academic/hackathon-style solution with the objective of exploring how technology can help **local artisans, skilled workers, and micro-entrepreneurs build a stronger digital presence**.
