module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        accent: {
          DEFAULT: "var(--accent-color)",
          foreground: "var(--accent-foreground)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          light: "var(--border-light)",
          dark: "var(--border-dark)",
        },
      },
      fontFamily: {
        verdana: ['Verdana, Geneva, sans-serif'],
        default: ['Verdana, Geneva, sans-serif'],
      },
    },
  },
  plugins: [],
  // Add custom utilities for snap scrolling
  corePlugins: {
    theme: {
      extend: {
        '.snap-section': {
          '@media (max-width: 768px)': {
            'scroll-snap-align': 'start',
            'scroll-snap-stop': 'always',
            'min-height': '100vh',
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
          }
        }
      }
    }
  }
}