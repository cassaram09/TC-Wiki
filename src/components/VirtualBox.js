import React from 'react';
import ReactPlayer from '../../node_modules/react-player';

const VirtualBox = () => (
	<div>
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
			<h1>VirtualBox</h1>
		</div>
		<ul>
			<li>
				<a href="https://github.com/flatiron-labs/technical-coach-resources/blob/master/virtual-box-setup-errors-and-resources.md#tutorial-how-to-enable-vt-x">
					Link to VB troubleshooting repo
				</a>
			</li>
		</ul>
		<h3>Resizing HD in VirtualBox</h3>
		<ReactPlayer url="https://www.youtube.com/watch?v=q-9r-UGunus&index=1&list=PLi0yUl9brD2OR7dJM_FhoC3EGakbkEljx&t=3s" />
	</div>
);

export default VirtualBox;