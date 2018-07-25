import React from 'react';

const svgBase = svg => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather"
	>
		{svg}
	</svg>
);

export const Book = () =>
	svgBase(
		<React.Fragment>
			<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
			<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
		</React.Fragment>
	);

export const Users = () =>
	svgBase(
		<React.Fragment>
			<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</React.Fragment>
	);

export const File = () =>
	svgBase(
		<React.Fragment>
			<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
			<polyline points="13 2 13 9 20 9" />
		</React.Fragment>
	);

export const Info = () =>
	svgBase(
		<React.Fragment>
			<circle cx="12" cy="12" r="10" />
			<line x1="12" y1="16" x2="12" y2="12" />
			<line x1="12" y1="8" x2="12" y2="8" />
		</React.Fragment>
	);

export const Box = () =>
	svgBase(
		<React.Fragment>
			<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" />
			<polyline points="2.32 6.16 12 11 21.68 6.16" />
			<line x1="12" y1="22.76" x2="12" y2="11" />{' '}
		</React.Fragment>
	);

export const Code = () =>
	svgBase(
		<React.Fragment>
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />{' '}
		</React.Fragment>
	);

export const Rss = () =>
	svgBase(
		<React.Fragment>
			<path d="M4 11a9 9 0 0 1 9 9" />
			<path d="M4 4a16 16 0 0 1 16 16" />
			<circle cx="5" cy="19" r="1" />{' '}
		</React.Fragment>
	);

export const FileText = () =>
	svgBase(
		<React.Fragment>
			<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
			<polyline points="14 2 14 8 20 8" />
			<line x1="16" y1="13" x2="8" y2="13" />
			<line x1="16" y1="17" x2="8" y2="17" />
			<polyline points="10 9 9 9 8 9" />{' '}
		</React.Fragment>
	);

export const YouTube = () =>
	svgBase(
		<React.Fragment>
			<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
			<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />{' '}
		</React.Fragment>
	);

export const Slack = () =>
	svgBase(
		<React.Fragment>
			<path d="M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z" />
			<line x1="12.57" y1="5.99" x2="16.15" y2="16.39" />
			<line x1="7.85" y1="7.61" x2="11.43" y2="18.01" />
			<line x1="16.39" y1="7.85" x2="5.99" y2="11.43" />
			<line x1="18.01" y1="12.57" x2="7.61" y2="16.15" />{' '}
		</React.Fragment>
	);

export const Github = () =>
	svgBase(
		<React.Fragment>
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
		</React.Fragment>
	);

export const Copy = () =>
	svgBase(
		<React.Fragment>
			<rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
			<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
		</React.Fragment>
	);

export const MessageCircle = () =>
	svgBase(
		<React.Fragment>
			<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
		</React.Fragment>
	);

export const LogOut = () =>
	svgBase(
		<React.Fragment>
			<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
			<polyline points="16 17 21 12 16 7" />
			<line x1="21" y1="12" x2="9" y2="12" />
		</React.Fragment>
	);

export const Flag = () =>
	svgBase(
		<React.Fragment>
			<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
			<line x1="4" y1="22" x2="4" y2="15" />
		</React.Fragment>
	);

export const BookOpen = () =>
	svgBase(
		<React.Fragment>
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
		</React.Fragment>
	);

export const ArrowUp = () =>
	svgBase(
		<React.Fragment>
			<line x1="12" y1="19" x2="12" y2="5" />
			<polyline points="5 12 12 5 19 12" />
		</React.Fragment>
	);
