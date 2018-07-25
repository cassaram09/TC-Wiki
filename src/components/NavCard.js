import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const NavCard = ({ snippets }) => (
	<div className="card mb-3">
		<div className="card-header">
			<ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
				{snippets.map((snippet, i) => (
					<li className="nav-item" key={i}>
						<a
							className={i === 0 ? 'active nav-link' : 'nav-link'}
							id={`${snippet.tag}-tab`}
							data-toggle="tab"
							href={`#${snippet.tag}`}
							role="tab"
							aria-controls={snippet.tag}
							aria-selected="true"
						>
							{snippet.title}
						</a>
					</li>
				))}
			</ul>
		</div>
		<div className="tab-content " id="myTabContent">
			{snippets.map((snippet, i) => (
				<div
					key={i}
					className={i === 0 ? 'tab-pane fade show active card-body' : 'tab-pane fade show card-body'}
					id={snippet.tag}
					role="tabpanel"
					aria-labelledby={`${snippet.tag}-tab`}
				>
					{ReactHtmlParser(snippet.body)}
				</div>
			))}
		</div>
	</div>
);
export default NavCard;
