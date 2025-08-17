import React from 'react';

export const GithubIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="GitHub">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.63 0 12 .297z" />
  </svg>
);

export const LinkedInIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="LinkedIn">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
    </svg>
);

export const EmailIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Email">
      <path d="M1.75 3h20.5c.97 0 1.75.78 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.78.78 3 1.75 3ZM1.5 8.02v11.23c0 .14.11.25.25.25h20.5a.25.25 0 0 0 .25-.25V8.02l-10.5 6.05a.25.25 0 0 1-.25 0L1.5 8.02ZM22.25 4.5H1.75a.25.25 0 0 0-.25.25v.71l10.62 6.13a.25.25 0 0 0 .25 0L22.5 5.46v-.71a.25.25 0 0 0-.25-.25Z"></path>
    </svg>
);

export const CodepenIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="CodePen">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
        <line x1="12" y1="22" x2="12" y2="15.5"></line>
        <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
        <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
        <line x1="12" y1="2" x2="12" y2="8.5"></line>
    </svg>
);

export const DevToIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Dev.to">
        <path d="M22.54 19.82c.45.64.28 1.5-.39 1.98a1.36 1.36 0 01-.54.16c-.32 0-.64-.13-.88-.39l-3.34-3.34H6.62l-3.34 3.34c-.24.26-.56.39-.88.39a1.36 1.36 0 01-.54-.16c-.67-.48-.84-1.34-.39-1.98L4.6 15.7H1.5c-.83 0-1.5-.67-1.5-1.5v-3.4c0-.83.67-1.5 1.5-1.5h3.1L1.47 4.18c-.45-.64-.28-1.5.39-1.98.67-.48 1.59-.3 1.98.39l3.34 3.34h10.74l3.34-3.34c.39-.69 1.31-.87 1.98-.39.67.48.84 1.34.39 1.98L19.4 9.3h3.1c.83 0 1.5.67 1.5 1.5v3.4c0 .83-.67 1.5-1.5 1.5h-3.1l3.14 4.12zM9.42 11.56H8.06v2.09H6.77V10.1h2.65c1.28 0 1.9.5 1.9 1.48 0 .98-.62 1.48-1.9 1.48zm0-1.55c.48 0 .66-.23.66-.52 0-.29-.18-.52-.66-.52H8.06v1.04h1.36zm4.72 1.55h-1.07l-1.3-3.56h1.4l.69 2.09.68-2.09h1.4l-1.3 3.56z"></path>
    </svg>
);

export const HackerOneIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="HackerOne">
        <path d="M12 2L3 6.35V12c0 4.8 3.5 9.1 8.2 10.25a9.8 9.8 0 001.6 0C17.5 21.1 21 16.8 21 12V6.35L12 2zm-1.25 14.25h-2V9.5h2v6.75zm3.75 0h-2V9.5h2v6.75z"></path>
    </svg>
);

export const FacebookIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Facebook">
        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.196h3.312z"></path>
    </svg>
);

export const VideoCallIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" />
    </svg>
);

export const PhoneIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} aria-label="Phone">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
);

export const CodeIcon = ({ className = 'w-5 h-5 mr-2' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
    </svg>
);

export const SendIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.826L11.25 8.25l-6.507-1.085A.75.75 0 003.105 2.29zM11.25 11.75l-6.507 1.085a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.826L16.25 15.75l-1.085-6.507a.75.75 0 00-.826-.95L3.105 9.712v.001a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.826L11.25 11.75z" />
    </svg>
);

export const ExportIcon = ({ className = 'w-5 h-5 mr-2' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);