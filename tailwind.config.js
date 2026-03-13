/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0DFFA8',
        yellow: '#FFED4F',
        pink: '#FFD9FD',
        blue: '#D9EFFF',
        ink: '#0B0B0B',
        dark: {
          background: '#0f172a',
          section: '#111827',
          card: '#1f2937',
          text: {
            primary: '#f9fafb',
            secondary: '#cbd5e1',
          },
          accent: '#34f5a3',
          yellow: '#facc15',
        },
      },
      boxShadow: {
        brutal: '6px 6px 0 0 #000',
        brutalLight: '6px 6px 0 0 #000',
        brutalDark: '5px 5px 0px #000',
        subtle: '4px 4px 0 0 #000',
      },
      borderRadius: {
        brutal: '16px',
      },
      borderWidth: {
        3: '3px',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
