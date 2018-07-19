import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Book, Users, File, Info, Box, Code, Rss } from './Svg';

const Sidebar = ({ user }) => {
	return (
		<nav className="col-md-2 d-none d-md-block bg-light sidebar">
			<div className="sidebar-sticky">
				<ul className="nav flex-column">
					<div className=" d-flex align-items-center flex-wrap flex-md-nowrap pt-2 pb-2 mb-3 border-bottom pr-3 pl-3">
						<img className="img-fluid w-25 pr-2" src={user.photoURL} alt="" />
						<div className="d-flex flex-wrap profile-text">
							<h4 className="mb-0">{user.displayName}</h4>
							<p>Tech Coach Lead</p>
						</div>
					</div>
					<li className="nav-item">
						<NavLink exact to="/aaq" className="nav-link" title="AAQ">
							<File />
							AAQ
						</NavLink>
					</li>
					<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
						<span>Specialization</span>
					</h6>
					<li className="nav-item">
						<NavLink exact to="/study-groups" className="nav-link" title="Study Groups">
							<Book />
							Study Groups
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/one-on-ones" className="nav-link" title="1:1s">
							<Users />
							1:1s
						</NavLink>
					</li>
				</ul>

				<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
					<span>Other Resources</span>
					{/* <a className="d-flex align-items-center text-muted" href="#">
						<Info />
					</a> */}
				</h6>
				<ul className="nav flex-column mb-2">
					<li className="nav-item">
						<NavLink exact to="/shift-info" className="nav-link" title="Ongoing Info">
							<Info />
							Ongoing Info
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/virtual-box" className="nav-link" title="Virtual Box">
							<Box />
							Virtual Box
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/jira-tickets" className="nav-link" title="Jira Tickets">
							<Code />
							Jira Tickets
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/curriculum-updates" className="nav-link" title="Curriculum Updates">
							<Rss />
							Curriculum Updates
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

export default withRouter(connect(mapStateToProps)(Sidebar));
