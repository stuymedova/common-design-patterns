class TCPConnection {
	private state: TCPState;

	constructor(state: TCPState) {
		this.setState(state);
	}

	setState(state: TCPState) {
		this.state = state;
	}

	open() {
		this.state.open(this);
	};

	close() {
		this.state.close(this);
	};

	acknowledge() {
		this.state.acknowledge(this);
	};
}

interface TCPState {
	open: (connection: TCPConnection) => void;
	close: (connection: TCPConnection) => void;
	acknowledge: (connection: TCPConnection) => void;
};

class TCPEstablished implements TCPState {
	open(connection: TCPConnection) {
		// State-specific behaviour
	}

	close(connection: TCPConnection) {
		// State-specific behaviour
	}

	acknowledge(connection: TCPConnection) {
		// State-specific behaviour
	}
}

class TCPListen implements TCPState {
	open(connection: TCPConnection) {
		// State-specific behaviour
	}

	close(connection: TCPConnection) {
		// State-specific behaviour
	}

	acknowledge(connection: TCPConnection) {
		// State-specific behaviour
	}
}

class TCPClosed implements TCPState {
	open(connection: TCPConnection) {
		// State-specific behaviour, for instance
		connection.setState(new TCPListen());
	}

	close(connection: TCPConnection) {
		// State-specific behaviour
	}

	acknowledge(connection: TCPConnection) {
		// State-specific behaviour
	}
}


const connection = new TCPConnection(new TCPClosed());
connection.open();
connection.acknowledge();
connection.close();
