import React from 'react';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

// Actions
import { clearResults } from '../actions/searchActions';

const SearchResults = ({ repos, clearResults, loading, matchFound }) => {
	function renderResults() {
		if (loading) {
			return <ReactLoading type="bubbles" color="#32cefe" height={64} width={64} className="loading-repos" />;
		} else if (repos.length !== 0) {
			return (
				<div className="list-group mb-4">
					<div className="d-flex justify-content-between align-items-end">
						<button onClick={clearResults} className="btn btn-outline-secondary btn-sm mb-2 w-25">
							Clear Results
						</button>
						<small>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://developer.github.com/v3/search/#ranking-search-results"
							>
								Match Score
							</a>
						</small>
					</div>
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
								<small>Match Score: {Math.round(repo.score * 100) / 100}</small>
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
		} else if (matchFound !== '') {
			return <h5 className="text-danger mb-4">No Match Found for: <strong>{matchFound}</strong></h5>;
		} else {
			return <div />;
		}
	}

	return renderResults();
};

function mapStateToProps(state) {
	return {
		repos: state.search.repos,
		loading: state.search.loading,
		matchFound: state.search.matchFound
	};
}

export default connect(
	mapStateToProps,
	{ clearResults }
)(SearchResults);
