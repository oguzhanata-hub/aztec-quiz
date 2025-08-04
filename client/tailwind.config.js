/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aztec interface palette (pui scale)
        'pui-70': '#321e4c',
        'pui-60': '#514167',
        'pui-50': '#706383',
        'pui-40': '#8f869e',
        'pui-30': '#afa8ba',
        'pui-20': '#cecbd5',
        'pui-10': '#eeedf1',

        // Semantic aliases used across UI
        'aztec-bg': '#1a1524',
        'aztec-bg-soft': '#221a33',
        'aztec-text': '#eeedf1',
        'aztec-accent': '#706383',
        'aztec-accent-2': '#8f869e',
        'aztec-glass': 'rgba(255,255,255,0.06)',
        'aztec-glass-border': 'rgba(255,255,255,0.12)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'aztec-gradient': 'radial-gradient(1200px 600px at 10% -10%, #321e4c 0%, transparent 50%), radial-gradient(900px 600px at 100% 0%, #514167 0%, transparent 55%), linear-gradient(180deg, #1a1524 0%, #0f0c18 100%)',
        'aztec-btn': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
        'aztec-btn-hover': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)'
      },
      borderRadius: {
        xl2: '1rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 500ms ease-out both',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
