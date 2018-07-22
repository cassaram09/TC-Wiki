import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Book, Users, File, Info, Box, Code, Rss, Flag } from './Svg';

const Sidebar = ({ user }) => {
	return (
		<aside class="col-12 col-lg-3 col-xl-2 col-md-3 bg-light sidebar">
			<nav class="navbar navbar-expand flex-md-column flex-row align-items-start py-2">
				<div class="collapse navbar-collapse">
					<ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
						<div className="d-none d-md-flex row border-bottom align-items-center flex-wrap flex-md-nowrap pt-0 pb-2 mb-3 border-bottom">
							<div className="col-4 pr-0">
								<img className="img-fluid" src={user.photoURL} alt="" />
							</div>
							<div className="col-8">
								<h5 className="mb-0">{user.displayName}</h5>
								<small className="mb-0">Tech Coach Lead</small>
							</div>
						</div>
						<li className="nav-item">
							<img className="d-md-none d-inline profile-img" src={user.photoURL} alt="" />
						</li>
						<li className="nav-item">
							<NavLink exact to="/aaq" className="nav-link pl-0" title="AAQ">
								<File />
								<span class="d-none d-md-inline">AAQ</span>
							</NavLink>
						</li>
						<h6 className="sidebar-heading d-none d-md-inline mt-4 mb-1 text-muted">
							<span>Specialization</span>
						</h6>
						<li className="nav-item">
							<NavLink exact to="/study-groups" className="nav-link pl-0" title="Study Groups">
								<Book />
								<span class="d-none d-md-inline">Study Groups</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/one-on-ones" className="nav-link pl-0" title="1:1s">
								<Users />
								<span class="d-none d-md-inline">1:1s</span>
							</NavLink>
						</li>

						<h6 className="sidebar-heading d-none d-md-inline mt-4 mb-1 text-muted">
							<span>Other Resources</span>
						</h6>
						<li className="nav-item">
							<NavLink exact to="/shift-info" className="nav-link pl-0" title="Ongoing Info">
								<Info />
								<span class="d-none d-md-inline">Ongoing Info</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/virtual-box" className="nav-link pl-0" title="Virtual Box">
								<Box />
								<span class="d-none d-md-inline">Virtual Box</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/jira-tickets" className="nav-link pl-0" title="Jira Tickets">
								<Code />
								<span class="d-none d-md-inline">Jira Tickets</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/curriculum-updates" className="nav-link pl-0" title="Curriculum Updates">
								<Rss />
								<span class="d-none d-md-inline">Curriculum Updates</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/common-errors" className="nav-link pl-0" title="Common Errors">
								<Flag />
								<span class="d-none d-md-inline">Common Errors</span>
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</aside>
	);
};

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

export default withRouter(connect(mapStateToProps)(Sidebar));
