import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CommonErrors = () => (
	<div>
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
			<h1>Common Errors</h1>
		</div>
		<h2>Ruby</h2>
		<div className="card-columns">
			<div className="card">
				<div className="card-header">Error: Cannot find module 'jsdom/lib/<strong>old-api</strong>'</div>
				<div className="card-body">
					<p className="card-text">
						In package.json change this: <code>"mocha-jsdom": "^1.1.0"</code>, to{' '}
						<code>"mocha-jsdom": "~1.1.0"</code>, and run <code>npm install</code>.
					</p>
					<p className="card-text">
						<CopyToClipboard text="In package.json change this: `&quot;mocha-jsdom&quot;: &quot;^1.1.0&quot;`, to `&quot;mocha-jsdom&quot;: &quot;~1.1.0&quot;`, and run `npm install`.">
							<button className="btn btn-sm btn-outline-secondary" type="button">
								Copy Solution
							</button>
						</CopyToClipboard>
					</p>
				</div>
			</div>
			<div className="card">
				<div className="card-header">
					NoMethodError: undefined method '<strong>needs_migration?</strong>' for ActiveRecord::Migrator:Class
				</div>
				<div className="card-body">
					<p className="card-text">
						In Gemfile change ActiveRecord version to 4.2 to{' '}
						<code>gem 'activerecord', '4.2', :require => 'active_record'</code> and run{' '}
						<code>bundle update</code>.
					</p>
					<p className="card-text">
						<CopyToClipboard text="In Gemfile change ActiveRecord version to 4.2 to `gem 'activerecord', '4.2', :require => 'active_record'` and run `bundle update`.">
							<button className="btn btn-sm btn-outline-secondary" type="button">
								Copy Solution
							</button>
						</CopyToClipboard>
					</p>
				</div>
			</div>
		</div>
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
			<h1>Answers To Common Questions</h1>
		</div>
		<ul>
			<li><a href="https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781">Js Dot Notation vs Bracket Notation</a></li>
		</ul>
	</div>
);

export default CommonErrors;
