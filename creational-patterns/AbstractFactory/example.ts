interface WidgetFactory {
	createScrollBar: () => ScrollBar;
	createWindow: () => CustomWindow;
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
interface CustomWindow {}

class MotifScrollBar implements ScrollBar {}
class PMScrollBar implements ScrollBar {}

class MotifWindow implements CustomWindow {}
class PMWindow implements CustomWindow {}


const preferMotif = true;
const app = preferMotif
	? new MotifWidgetFactory()
	: new PMWidgetFactory();

app.createWindow();
app.createScrollBar();
