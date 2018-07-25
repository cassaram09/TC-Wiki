import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Components
import { YouTube, FileText, Slack, Copy, Users, MessageCircle } from '../components/Svg';

const QuickLinks = () => (
	<div className="mb-3">
		<h3>Quick Links</h3>

		<div className="btn-toolbar mb-2 mb-md-3">
			<div className="btn-group mr-2 mb-2">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://learn.co/expert-chat"
					className="btn btn-sm btn-outline-secondary"
				>
					<MessageCircle /> Expert Chat
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://flatiron-staff.slack.com/messages/C0CU8GGAJ"
					className="btn btn-sm btn-outline-secondary"
				>
					<Slack /> Slack
				</a>

				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://appx.wheniwork.com/"
					className="btn btn-sm btn-outline-secondary"
				>
					WhenIWork
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://docs.google.com/forms/d/e/1FAIpQLSeOIlOz585-yyF2PhWzpZykipKV4CrqvD1STZLilhhTdvSrLw/viewform"
					className="btn btn-sm btn-outline-secondary"
				>
					<FileText /> TC Observation Form
				</a>

				<a
					target="_blank"
					rel="noopener noreferrer"
					href="http://help.learn.co/"
					className="btn btn-sm btn-outline-secondary"
				>
					Learn Help Center
				</a>
				<CopyToClipboard text="http://help.learn.co/">
					<button className="btn btn-sm btn-secondary" type="button">
						<Copy />
					</button>
				</CopyToClipboard>
			</div>
			<div className="btn-group mr-2 mb-2">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://instruction.learn.co/student/video_lectures"
					className="btn btn-sm btn-outline-secondary"
				>
					<YouTube /> Video Lectures
				</a>
				<CopyToClipboard text="https://instruction.learn.co/student/video_lectures">
					<button className="btn btn-sm btn-secondary" type="button">
						<Copy />
					</button>
				</CopyToClipboard>

				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://theflatironschool.typeform.com/to/B9BrgH"
					className="btn btn-sm btn-outline-secondary"
				>
					<Users /> 1:1 Project Support
				</a>
				<CopyToClipboard text="https://theflatironschool.typeform.com/to/B9BrgH">
					<button className="btn btn-sm btn-secondary" type="button">
						<Copy />
					</button>
				</CopyToClipboard>

				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/flatiron-labs/technical-coach-resources/blob/master/dispatch-cheatsheet.md"
					className="btn btn-sm btn-outline-secondary"
				>
					<YouTube /> 2 min Tid-Bits
				</a>
				<CopyToClipboard text="https://github.com/flatiron-labs/technical-coach-resources/blob/master/dispatch-cheatsheet.md">
					<button className="btn btn-sm btn-secondary" type="button">
						<Copy />
					</button>
				</CopyToClipboard>
			</div>
		</div>
		<h3>Resources for Most Asked About Labs</h3>
		<div className="btn-group mr-2 mb-2">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="http://help.learn.co/resource-guide-for-most-asked-about-labs/sinatra-playlister-resource-guide"
				className="btn btn-sm btn-outline-secondary"
			>
				Sinatra Playlister
			</a>
			<CopyToClipboard text="http://help.learn.co/resource-guide-for-most-asked-about-labs/sinatra-playlister-resource-guide">
				<button className="btn btn-sm btn-secondary" type="button">
					<Copy />
				</button>
			</CopyToClipboard>

			<a
				target="_blank"
				rel="noopener noreferrer"
				href="http://help.learn.co/resource-guide-for-most-asked-about-labs/music-library-cli-resource-guide"
				className="btn btn-sm btn-outline-secondary"
			>
				Music Library CLI
			</a>
			<CopyToClipboard text="http://help.learn.co/resource-guide-for-most-asked-about-labs/music-library-cli-resource-guide">
				<button className="btn btn-sm btn-secondary" type="button">
					<Copy />
				</button>
			</CopyToClipboard>

			<a
				target="_blank"
				rel="noopener noreferrer"
				href="http://help.learn.co/resource-guide-for-most-asked-about-labs/tic-tac-toe-with-ai-resource-guide"
				className="btn btn-sm btn-outline-secondary"
			>
				Tic Tac Toe with AI
			</a>
			<CopyToClipboard text="http://help.learn.co/resource-guide-for-most-asked-about-labs/tic-tac-toe-with-ai-resource-guide">
				<button className="btn btn-sm btn-secondary" type="button">
					<Copy />
				</button>
			</CopyToClipboard>
		</div>
	</div>
);

export default QuickLinks;
