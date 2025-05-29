import '@/styles/index.css';

export const metadata = {
  title: 'Marionix Interactive Platform',
  description: 'AI-powered educational platform for children to interact with animated characters',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#040819" />
        <link rel='manifest' href='/manifest.json'></link>
        <link rel='icon' href='/favicon.ico'></link>
      </head>
      <body className="bg-[#040819]" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
        {children}
        <script id="dhws-errorTracker" src="/dhws-error-tracker.js"></script>
        <script id="dhws-elementInspector" src="/dhws-web-inspector.js"></script>
      </body>
    </html>
  );
}