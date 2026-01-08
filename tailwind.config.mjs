/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#F4B083',
        'primary-hover': '#E09A6C',
        'background-dark': '#020617',
        'surface-dark': '#0F172A',
        'card-dark': '#1E293B',
        'text-main': '#F1F1F3',
        'text-body': '#E5E0DF',
        'text-muted': '#E5E0DF',
      },
      fontFamily: {
        'serif': ['"GFS Didot"', 'Didot', 'serif'],
        'body': ['Roboto', 'sans-serif'],
        'sans': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': ['60px', { lineHeight: '1.1', fontWeight: '500' }],
        'h2': ['36px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '500' }],
        'h3': ['28px', { lineHeight: '1.3', fontWeight: '500' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '300' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-down': 'fadeInDown 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'float': 'simpleFloat 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        simpleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
}
