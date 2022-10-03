class Dispatcher {
  handlers = [];

  register(handler) {
    this.handlers.push(handler);
  }

  dispatch(action) {
    for (let handle of this.handlers) handle(action);
  }
}

export default new Dispatcher();
