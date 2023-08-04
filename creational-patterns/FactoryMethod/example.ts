interface Document {
	open: () => void;
	close: () => void;
	save: () => void;
}

abstract class Application {
	public abstract createDocument(): Document;
	public documents: Document[];

	newDocument() {
		const document = this.createDocument();
		this.documents.push(document);
		return document.open();
	}
}

class MyApplication extends Application {
	createDocument() {
		return new MyDocument();
	}
}

class DrawingApplication extends Application {
	createDocument() {
		return new DrawingDocument();
	}
}

class MyDocument implements Document {
	open() {
		// Does something
	}

	close() {}

	save() {}
}

class DrawingDocument implements Document {
	open() {
		// Does something
	}

	close() {}

	save() {}
}


const preferMyApplication = true;
const application = preferMyApplication
	? new MyApplication()
	: new DrawingApplication();
application.newDocument();

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
