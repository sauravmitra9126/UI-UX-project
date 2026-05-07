import React, { useState } from 'react';

export default function LaundryAppPrototype() {
  const screens = {
    splash: {
      title: 'Splash Screen',
      next: 'login',
      content: 'Welcome to LaundryEase',
    },
    login: {
      title: 'Login / Signup',
      next: 'home',
      content: 'Login with Email or Phone',
    },
    home: {
      title: 'Home Dashboard',
      next: 'services',
      content: 'Book laundry services quickly',
    },
    services: {
      title: 'Services',
      next: 'booking',
      content: 'Wash, Dry Clean, Ironing',
    },
    booking: {
      title: 'Booking',
      next: 'tracking',
      content: 'Pickup date, address & payment',
    },
    tracking: {
      title: 'Order Tracking',
      next: 'profile',
      content: 'Track your laundry in real-time',
    },
    profile: {
      title: 'User Profile',
      next: 'rewards',
      content: 'Manage personal details',
    },
    rewards: {
      title: 'Rewards',
      next: 'support',
      content: 'Earn loyalty points & coupons',
    },
    support: {
      title: 'Support Chat',
      next: 'admin',
      content: 'Chat with support agents',
    },
    admin: {
      title: 'Admin Dashboard',
      next: 'orders',
      content: 'Manage users & reports',
    },
    orders: {
      title: 'Order Management',
      next: 'users',
      content: 'View active and completed orders',
    },
    users: {
      title: 'User Management',
      next: 'splash',
      content: 'Handle customer accounts',
    },
  };

  const [current, setCurrent] = useState('splash');
  const screen = screens[current];

  const navItems = [
    { label: 'Home', icon: '🏠', target: 'home' },
    { label: 'Orders', icon: '📦', target: 'tracking' },
    { label: 'Rewards', icon: '🎁', target: 'rewards' },
    { label: 'Profile', icon: '👤', target: 'profile' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 to-white flex items-center justify-center p-6">
      <div className="w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-violet-200 relative">
        <div className="bg-violet-600 text-white p-6 text-center">
          <h1 className="text-2xl font-bold">TuteDude Laundry App</h1>
          <p className="text-sm opacity-90 mt-1">UI/UX Assignment Prototype</p>
        </div>

        <div className="flex flex-col items-center justify-center h-[620px] px-8 text-center">
          <div className="w-28 h-28 rounded-full bg-violet-100 flex items-center justify-center text-5xl mb-6">
            🧺
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">{screen.title}</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">{screen.content}</p>

          <button
            onClick={() => setCurrent(screen.next)}
            className="bg-violet-600 hover:bg-violet-700 transition-all text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
          >
            Continue
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4 flex justify-around">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setCurrent(item.target)}
              className="flex flex-col items-center text-sm text-violet-700"
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="ml-10 hidden lg:block max-w-md">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-violet-100">
          <h3 className="text-2xl font-bold text-violet-700 mb-4">
            Prototype Navigation Flow
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>1. Splash → Login</li>
            <li>2. Login → Home</li>
            <li>3. Home → Services</li>
            <li>4. Services → Booking</li>
            <li>5. Booking → Tracking</li>
            <li>6. Tracking → Profile</li>
            <li>7. Profile → Rewards</li>
            <li>8. Rewards → Support</li>
            <li>9. Support → Admin Dashboard</li>
            <li>10. Admin → Order Management</li>
            <li>11. Orders → User Management</li>
          </ul>

          <div className="mt-6 p-4 bg-violet-50 rounded-2xl text-sm text-gray-600">
            This prototype demonstrates the clickable navigation required for the assignment.
          </div>
        </div>
      </div>
    </div>
  );
}
