function addNode(where, type, content, css) {
    const element = document.createElement(type);
    const node = document.createTextNode(content);
    element.appendChild(node);

    document.querySelector(where).appendChild(element);
    element.style.cssText = css
}
