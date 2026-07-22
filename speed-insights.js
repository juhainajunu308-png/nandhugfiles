// Vercel Speed Insights initialization
// This script loads and initializes Vercel Speed Insights for performance monitoring

// Initialize the Speed Insights queue
window.si = window.si || function () { 
  (window.siq = window.siq || []).push(arguments); 
};

// The script will be automatically loaded by Vercel when deployed
// It will track web vitals and performance metrics
// The /_vercel/speed-insights/script.js will be injected automatically when Speed Insights is enabled in the Vercel dashboard
