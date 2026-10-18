/* The RM mark drawn inline (Oct 18) so it follows the theme: the letters in currentColor (the ink), the ball and the bars in the accent — the neon in dark, #FFB733 in light.
   public/mark.svg stays as the favicon only; every mark on a page is this component. The drawing is lib/design/logo-rm.svg's, verbatim. */
import { useId } from 'react'

export function Mark({ className = '', size }: { className?: string; size?: number }) {
  const maskId = useId()
  return <svg viewBox="0 0 256 256" fill="none" aria-hidden="true" width={size} height={size} className={`text-ink ${className}`}>
    <defs><mask id={maskId} x="136" y="116" width="36" height="36" maskUnits="userSpaceOnUse" style={{ maskType: 'luminance' }}><circle cx="154" cy="134" r="16.5" fill="white" /><path d="M138 130 C150 129 160 143 151 151 M160 118 C155 129 163 137 171 138" transform="translate(154 134) scale(1.137931034483) translate(-154 -134)" stroke="black" strokeWidth="3" strokeLinecap="round" /></mask></defs>
    <path d="M52 44 H102 C130 44 145 60 145 83 C145 105 132 119 111 125 L154 165 L190 126 H213 V215 H190 V158.435 L155.186 196.150 L82.999 129 H74 V158 H52 Z M74 65 V108 H101 C116 108 123 100 123 84 C123 72 115 65 101 65 Z" fill="currentColor" fillRule="evenodd" />
    <path d="M89 141 L111 162 V215 H89 Z M117 167.727 L139 188.727 V215 H117 Z" className="fill-accent" />
    <circle cx="154" cy="134" r="16.5" className="fill-accent" mask={`url(#${maskId})`} />
  </svg>
}
