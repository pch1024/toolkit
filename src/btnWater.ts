const btnWater = (className: string) => {
  interface DomEventTarget extends EventTarget {
    className: string;
    childNodes: NodeList;
    offsetLeft: number;
    offsetTop: number;
    left: number;
    top: number;
    parentNode: DomEventTarget;
    appendChild(str: HTMLElement): string;
    removeChild(str: Node): string;
    getBoundingClientRect(): DomEventTarget;
  }

  interface DomEvent extends Event {
    target: DomEventTarget;
    clientX: number;
    clientY: number;
  }

  document.addEventListener('mouseup', function(e: DomEvent) {
    e.preventDefault();
    let loop = (el: DomEventTarget): DomEventTarget => {
      if (el.className && el.className.split(' ').indexOf(className) !== -1)
        return el;
      else if (el.parentNode) return loop(el.parentNode);
      else return null;
    };

    let btn = loop(e.target);
    if (btn) {
      let _offset = btn.getBoundingClientRect();
      let [left, top] = [e.clientX - _offset.left, e.clientY - _offset.top];

      let el = document.createElement('i');
      el.setAttribute('style', `top:${top}px;left:${left}px;`);
      btn.appendChild(el);

      setTimeout(() => {
        if (btn.childNodes[1]) btn.removeChild(btn.childNodes[1]);
      }, 1500);
    }
  });
};

export default btnWater;
