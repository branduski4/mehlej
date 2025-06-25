# MEHLEJ - Luxury Jewelry E-commerce

An elegant e-commerce website for a luxury jewelry brand built with **Astro**, **Tailwind CSS**, **Vue**, and **Firebase**.

## 🎯 Features

- **Elegant Design**: Premium black, gold, and white color scheme
- **Hero Section**: Fullscreen HD video background with elegant overlay
- **Product Cards**: Interactive cards with quantity selectors and cart functionality
- **Shopping Cart**: Side cart with real-time updates
- **Admin Panel**: Protected admin area with Firebase Authentication
- **Login System**: Modal login accessible from navbar for admin access
- **Stock Management**: Real-time inventory tracking with low stock alerts
- **Responsive**: Mobile-first design that works on all devices

## 🛠️ Tech Stack

- **Frontend**: Astro 4.x
- **Styling**: Tailwind CSS
- **Interactivity**: Vue 3 (Astro Islands)
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Payments**: Stripe Checkout (ready for integration)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password authentication
   - Enable Google authentication (optional)
4. Create a Firestore database
5. Enable Storage
6. Get your project configuration

### 3. Environment Variables

Copy `env.example` to `.env` and fill in your Firebase credentials:

```bash
cp env.example .env
```

Then edit `.env` with your Firebase project details:

```env
# Firebase Configuration
PUBLIC_FIREBASE_API_KEY=your-api-key-here
PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
PUBLIC_FIREBASE_PROJECT_ID=your-project-id
PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
PUBLIC_FIREBASE_APP_ID=your-app-id

# Stripe Configuration (optional)
PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

### 4. Create Admin User

1. Start the development server: `pnpm dev`
2. Visit [http://localhost:4321](http://localhost:4321)
3. Click the "Login" button in the navbar
4. Click "Registrarse" to create a new admin account
5. Fill in your details and create the account
6. You'll be redirected to the admin dashboard

### 5. Run Development Server

```bash
pnpm dev
```

Visit [http://localhost:4321](http://localhost:4321) to see your site!

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Hero.astro      # Hero section with video background
│   ├── Navigation.astro # Main navigation with cart and login
│   ├── ProductCard.astro # Product display cards with stock
│   ├── FirebaseAuth.astro # Authentication component
│   └── StockManagement.astro # Admin stock management
├── data/
│   └── products.ts     # Sample product data with stock
├── layouts/
│   └── Layout.astro    # Main layout with fonts and styles
├── lib/
│   └── firebase.ts     # Firebase configuration
├── pages/              # Astro pages (routes)
│   ├── index.astro     # Homepage
│   ├── admin.astro     # Admin login page
│   ├── admin/
│   │   └── dashboard.astro # Admin dashboard
│   ├── about.astro     # About page
│   ├── contact.astro   # Contact page
│   └── stock-test.astro # Stock management test page
├── styles/
│   └── global.css      # Global styles and Tailwind imports
└── types/
    └── index.ts        # TypeScript type definitions
```

## 🔐 Authentication & Admin Access

### Login System

- **Navbar Login**: Click the "Login" button in the top navigation
- **Modal Interface**: Clean, elegant login modal with Spanish interface
- **Multiple Auth Methods**: Email/Password and Google authentication
- **Auto-redirect**: Automatically redirects to dashboard if already logged in

### Admin Dashboard

- **Protected Routes**: Only accessible to authenticated users
- **Stock Management**: Real-time inventory tracking and updates
- **Product Overview**: Quick stats and recent activity
- **Logout Functionality**: Secure logout with redirect to home

### Security Features

- **Firebase Auth**: Secure authentication with Firebase
- **Route Protection**: Automatic redirects for unauthenticated users
- **Session Management**: Persistent login sessions
- **Error Handling**: User-friendly error messages in Spanish

## 🎨 Customization

### Colors

The project uses a luxury color palette defined in `tailwind.config.mjs`:

- `luxury-gold`: #D4AF37
- `luxury-gold-light`: #F4E4BC
- `luxury-gold-dark`: #B8860B
- `luxury-black`: #0A0A0A
- `luxury-gray`: #1A1A1A
- `luxury-white`: #FAFAFA

### Fonts

- **Playfair Display**: Used for headings and brand elements
- **Cormorant Garamond**: Used for body text and elegant typography

## 🔧 Development

### Adding Products

1. Update `src/data/products.ts` with your product data
2. Add `stock` property to each product (number)
3. Add product images to the `public/images/` directory
4. Update the image paths in the product data

### Admin Panel Access

1. Click "Login" in the navbar
2. Sign in with your admin credentials
3. Access the dashboard at `/admin/dashboard`
4. Manage stock levels and view product statistics

### Stock Management

- **Real-time Updates**: Stock changes reflect immediately
- **Low Stock Alerts**: Visual indicators for low inventory
- **Admin Controls**: Easy stock adjustment interface
- **Product Cards**: Show stock status to customers

### Cart Functionality

The cart uses localStorage for persistence and includes:

- Add/remove items
- Quantity adjustment (respects stock limits)
- Real-time total calculation
- Stock validation
- Checkout integration ready

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Deploy to Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect Astro
3. Add environment variables in Vercel dashboard

## 📝 TODO

- [x] ✅ Admin authentication system
- [x] ✅ Stock management functionality
- [x] ✅ Spanish translation
- [x] ✅ Login modal in navbar
- [ ] Complete admin dashboard functionality
- [ ] Integrate Stripe Checkout
- [ ] Add product image upload
- [ ] Implement order management
- [ ] Add search and filtering
- [ ] Create product detail pages
- [ ] Add wishlist functionality
- [ ] Implement user reviews

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**MEHLEJ** - Where elegance meets craftsmanship.
