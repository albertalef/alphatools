
import { Outlet } from "react-router-dom";
import "./assets/fonts/fonts.css";
import SquareFrame from "./components/frames/SquareFrame";
import { globalCss, styled } from "./config/stitches.config";
import Footer from "./frame/Footer";
import SideScreen from "./frame/SideScreen";
import WindowTab from "./frame/WindowTab";
import BotService from "./services/BotService";

const electron = require('electron')

electron.ipcRenderer.on("tryClose", _ => {
	BotService.stopAll().then(() => electron.ipcRenderer.send("forceClose"));
})

const globalStyle = globalCss({
	"*:focus": {
		outline: "none",
	},
	"*": {
		border: '0',
	},
	"*::selection": {
		color: '#1C2326',
		background: '#FC9927AA',
	}
})

function App(): JSX.Element {
	globalStyle();

	return (
		<Window>
			<WindowTab />
			<MainContent>
				<SideScreen />
				<Context>
					<Outlet />
				</Context>
				<Footer />
			</MainContent>
		</Window>
	)
}

const Window = styled('section', {
	width: '100vw',
	height: '100vh',
})

const MainContent = styled('div', {
	width: '100%',
	height: 'calc(100% - 33px)',

	boxSizing: "border-box",

	padding: 17,

	display: "grid",
	gridTemplateColumns: '230px 1fr',
	gridTemplateRows: '1fr 60px',
	gridGap: '15px',
})




const Context = styled(SquareFrame, {
	gridRowStart: 1,
	gridRowEnd: 3,
	gridColumnStart: 2,
	overflow: 'hidden',
})
export default App
