interface WidgetFactory {
	createScrollBar: () => ScrollBar;
	createMenu: () => Menu;
}

interface ScrollBar {}
interface Menu {}

class MotifWidgetFactory implements WidgetFactory {
	createScrollBar() {
		return new MotifScrollBar();
	}

	createMenu() {
		return new MotifMenu();
	}
}
class PMWidgetFactory implements WidgetFactory {
	createScrollBar() {
		return new PMScrollBar();
	}

	createMenu() {
		return new PMMenu();
	}
}

class MotifScrollBar implements ScrollBar {}
class PMScrollBar implements ScrollBar {}

class MotifMenu implements Menu {}
class PMMenu implements Menu {}
