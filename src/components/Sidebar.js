import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Book, Users, File, Info, Box, Code, Rss, Flag, BookOpen, Heart } from './Svg';

const Sidebar = ({ user }) => {
	return (
		<aside className="col-12 col-lg-3 col-xl-2 col-md-3 bg-light sidebar">
			<nav className="navbar navbar-expand flex-md-column flex-row align-items-start py-2">
				<div className="collapse navbar-collapse w-100">
					<ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
						<div className="d-none d-md-flex row border-bottom align-items-center flex-wrap flex-md-nowrap pt-0 pb-2 mb-4 border-bottom">
							<div className="col-auto pr-0">
								<img className="profile-img" src={user.photoURL} alt="" />
							</div>
							<div className="col">
								<h5 className="mb-0 profile-name">{user.displayName}</h5>
								<small className="mb-0">Technical Coach</small>
							</div>
						</div>
						<li className="nav-item">
							<img className="d-md-none d-inline profile-img" src={user.photoURL} alt="" />
						</li>
						<li className="nav-item">
							<NavLink exact to="/" className="nav-link home-sidebar-link" title="Home">
								<span className="feather logo-home">//</span> <span className="d-none d-md-inline">Home</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/general-info" className="nav-link pl-0" title="General Info">
								<Info />
								<span className="d-none d-md-inline">General Info</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/aaq" className="nav-link pl-0" title="AAQ">
								<File />
								<span className="d-none d-md-inline">AAQ</span>
							</NavLink>
						</li>
						<h6 className="sidebar-heading d-none d-md-inline mt-4 mb-1 text-muted">
							<span>Specialization</span>
						</h6>
						<li className="nav-item">
							<NavLink exact to="/study-groups" className="nav-link pl-0" title="Study Groups">
								<Book />
								<span className="d-none d-md-inline">Study Groups</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/one-on-ones" className="nav-link pl-0" title="1:1s">
								<Users />
								<span className="d-none d-md-inline">1:1s</span>
							</NavLink>
						</li>

						<h6 className="sidebar-heading d-none d-md-inline mt-4 mb-1 text-muted">
							<span>Other Resources</span>
						</h6>
						<li className="nav-item">
							<NavLink exact to="/virtual-box" className="nav-link pl-0" title="Virtual Box">
								<Box />
								<span className="d-none d-md-inline">Virtual Box</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/jira-tickets" className="nav-link pl-0" title="Jira Tickets">
								<Code />
								<span className="d-none d-md-inline">Jira Tickets</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/curriculum-updates" className="nav-link pl-0" title="Curriculum Updates">
								<Rss />
								<span className="d-none d-md-inline">Curriculum Updates</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/common-errors" className="nav-link pl-0" title="Common Errors">
								<Flag />
								<span className="d-none d-md-inline">Common Errors</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/learning" className="nav-link pl-0" title="Learning">
								<BookOpen />
								<span className="d-none d-md-inline">Learning</span>
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>

			<li className="nav-item feedback-nav-item">
				<NavLink exact to="/feedback" className="nav-link pl-0" title="Feedback">
					<Heart />
					<span className="d-none d-md-inline">Feedback</span>
				</NavLink>
			</li>
		</aside>
	);
};

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

export default withRouter(connect(mapStateToProps)(Sidebar));
