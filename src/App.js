import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";

const App = () => (
	<div>
		<BrowserRouter>
			<div className="flex relative dark:bg-main-dark-bg">
				<div
					className="fixed right-4 bottom-4 style"
					style={{ zIndex: "1000" }}>
					<TooltipComponent content="Settings" position="Top">
						<button type="button" className="bg-blue-900 rounded-full text-3xl p-3 hover:drop-shadow-xl hover:bg-blue-500 text-white">
							<FiSettings />
						</button>
					</TooltipComponent>
				</div>
			</div>
		</BrowserRouter>
	</div>
);

export default App;
