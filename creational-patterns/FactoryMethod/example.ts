interface AppDocument {
	open: () => void;
	close: () => void;
	save: () => void;
}

abstract class Application {
	public abstract createDocument(): AppDocument;
	public documents: AppDocument[];

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

class MyDocument implements AppDocument {
	open() {
		// Does something
	}

	close() {}

	save() {}
}

class DrawingDocument implements AppDocument {
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
