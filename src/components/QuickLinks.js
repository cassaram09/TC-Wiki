import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Components
import { YouTube, FileText, Slack, Copy, Users } from '../components/Svg';

const QuickLinks = () => (
	<div className="row mb-4">
		<div className="col-12">
			<h3>Quick Links</h3>

			<div className="btn-toolbar mb-2 mb-md-3">
				<div className="btn-group mr-2 mb-2">
					<a
						target="_blank"
						href="https://flatiron-staff.slack.com/messages/C0CU8GGAJ"
						className="btn btn-sm btn-outline-secondary"
					>
						<Slack /> Slack
					</a>

					<a target="_blank" href="https://appx.wheniwork.com/" className="btn btn-sm btn-outline-secondary">
						WhenIWork
					</a>
					<a
						target="_blank"
						href="https://docs.google.com/forms/d/e/1FAIpQLSeOIlOz585-yyF2PhWzpZykipKV4CrqvD1STZLilhhTdvSrLw/viewform"
						className="btn btn-sm btn-outline-secondary"
					>
						<FileText /> TC Observation Form
					</a>

					<a target="_blank" href="http://help.learn.co/" className="btn btn-sm btn-outline-secondary">
						Learn Help Center
					</a>
					<button className="btn btn-sm btn-secondary" type="button">
						<CopyToClipboard text="http://help.learn.co/">
							<Copy />
						</CopyToClipboard>
					</button>
				</div>
				<div className="btn-group mr-2 mb-2">
					<a
						target="_blank"
						href="https://instruction.learn.co/student/video_lectures"
						className="btn btn-sm btn-outline-secondary"
					>
						<YouTube /> Video Lectures
					</a>
					<button className="btn btn-sm btn-secondary" type="button">
						<CopyToClipboard text="https://instruction.learn.co/student/video_lectures">
							<Copy />
						</CopyToClipboard>
					</button>

					<a
						target="_blank"
						href="https://theflatironschool.typeform.com/to/B9BrgH"
						className="btn btn-sm btn-outline-secondary"
					>
						<Users /> 1:1 Project Support
					</a>
					<button className="btn btn-sm btn-secondary" type="button">
						<CopyToClipboard text="https://theflatironschool.typeform.com/to/B9BrgH">
							<Copy />
						</CopyToClipboard>
					</button>
				</div>
			</div>
		</div>
	</div>
);

export default QuickLinks;
