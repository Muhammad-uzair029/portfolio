/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        navy: {
          950: '#020817',
          900: '#0a0f1e',
          800: '#0d1b2e',
          700: '#0f2040',
          600: '#1a3a5c',
          500: '#1e4d7b',
        },
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        glow: {
          from: { textShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6' },
          to: { textShadow: '0 0 20px #8b5cf6, 0 0 40px #8b5cf6' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #020817 0%, #0a0f1e 50%, #0d1b2e 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(30,64,175,0.1) 0%, rgba(109,40,217,0.1) 100%)',
        'skill-gradient': 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
        'accent-gradient': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(59, 130, 246, 0.2)',
      },
    },
  },
  plugins: [],
};
