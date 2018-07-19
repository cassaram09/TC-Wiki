import React from 'react';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux';

// Actions
import { clearResults } from '../actions/searchActions';

const SearchResults = ({ repos, clearResults }) => (
	<div className="list-group">
		{repos.length !== 0 && (
			<button onClick={clearResults} className="btn btn-outline-secondary btn-sm mb-2 w-25">
				Clear Results
			</button>
		)}
		{repos.map((repo, i) => (
			<a
				key={i}
				href={repo.html_url}
				className="list-group-item list-group-item-action flex-column align-items-start"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">{repo.name}</h5>
					<small>3 days ago</small>
				</div>
				<ul>
					{repo.text_matches.map((match, i) => (
						<li key={i} className="mb-1">
							<Highlighter
								highlightClassName="highlighted"
								searchWords={[match.matches[0].text]}
								autoEscape={true}
								textToHighlight={match.fragment}
							/>
						</li>
					))}
				</ul>
				<small>Path: {repo.path}</small>
			</a>
		))}
	</div>
);

function mapStateToProps(state) {
	return {
		repos: state.search.repos
	};
}

export default connect(
	mapStateToProps,
	{ clearResults }
)(SearchResults);
