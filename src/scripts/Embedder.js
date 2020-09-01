class Embedder {

  createWidgets() {
    document.querySelectorAll('.my-widget').forEach((element) => {
      this._createWidget({
        element,
        height: '320px',
        customArg: element.getAttribute('data-arg'),
      });
    });
  }

  _createWidget(options) {
    const url = process.env.NODE_ENV == 'development'
      ? `http://localhost:8080/widget?customArg=${options.customArg}`
      : `https://example.com/widget?customArg=${options.customArg}`;
    const iframe = this._createIframe(url, options);
    options.element.parentNode.replaceChild(iframe, options.element);
  }

  _createIframe(url, options) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('name', 'My Embedded widget');
    iframe.setAttribute('title', 'My Embedded widget');
    iframe.setAttribute('src', url);
    iframe.setAttribute('border', 'none');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('height', options.height);

    return iframe;
  }

}

export default Embedder;
