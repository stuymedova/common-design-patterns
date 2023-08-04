interface WidgetFactory {
	createScrollBar: () => ScrollBar;
	createWindow: () => Window;
}

class MotifWidgetFactory implements WidgetFactory {
	createScrollBar() {
		return new MotifScrollBar();
	}

	createWindow() {
		return new MotifWindow();
	}
}
class PMWidgetFactory implements WidgetFactory {
	createScrollBar() {
		return new PMScrollBar();
	}

	createWindow() {
		return new PMWindow();
	}
}

interface ScrollBar {}
interface Window {}

class MotifScrollBar implements ScrollBar {}
class PMScrollBar implements ScrollBar {}

class MotifWindow implements Window {}
class PMWindow implements Window {}


const preferMotif = true;
const app = preferMotif
	? new MotifWidgetFactory()
	: new PMWidgetFactory();

app.createWindow();
app.createScrollBar();

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
