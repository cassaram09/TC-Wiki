import React from 'react';

const Sidebar = () => (
	<nav className="col-md-2 d-none d-md-block bg-light sidebar">
		<div className="sidebar-sticky">
			<ul className="nav flex-column">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						<span data-feather="home" />
						Dashboard <span className="sr-only">(current)</span>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						<span data-feather="file" />
						AAQ
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						<span data-feather="shopping-cart" />
						Study Groups
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						<span data-feather="users" />
						1:1s
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						<span data-feather="bar-chart-2" />
						Reports
					</a>
				</li>
			</ul>

			<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
				<span>Saved reports</span>
				<a className="d-flex align-items-center text-muted" href="#">
					<span data-feather="plus-circle" />
				</a>
			</h6>
			<ul className="nav flex-column mb-2">
				<li className="nav-item">
					<a className="nav-link" href="#">
						<span data-feather="file-text" />
						Current month
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						<span data-feather="file-text" />
						Last quarter
					</a>
				</li>
			</ul>
		</div>
	</nav>
);

export default Sidebar;
