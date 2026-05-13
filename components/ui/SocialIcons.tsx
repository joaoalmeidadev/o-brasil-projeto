type Props = { className?: string };

export function FacebookIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.6H7.7V13h2.7v8h3.1z" />
    </svg>
  );
}

export function InstagramIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.5L4.7 21H1.5l7.5-8.6L1 3h6.6l4.5 6 5.4-6zm-1.1 16h1.8L7.7 5H5.8l10.6 14z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21.6 7.2c-.2-.9-.9-1.6-1.7-1.8C18.3 5 12 5 12 5s-6.3 0-7.9.4c-.9.2-1.5.9-1.7 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.7 1.8 1.6.4 7.9.4 7.9.4s6.3 0 7.9-.4c.9-.2 1.5-.9 1.7-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3-5.2 3z" />
    </svg>
  );
}
