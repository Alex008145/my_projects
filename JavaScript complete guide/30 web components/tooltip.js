class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = 'Some dummy tooltip text.';
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
        <style>
           div {
             background-color: black;
             color: white;
             position: absolute;
             z-index: 10;
           }

           .highlight {
             background: red;
           }

           ::slotted(.highlight) {
             border-bottom: 1px dotted red
           }
        </style>
        <slot>Some deafult tooltip</slot>
        <span> (?) </span>
        `;
  }

  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
    const tooltipIcon = this.shadowRoot.querySelector('span');
    tooltipIcon.addEventListener('mouseenter', this.#showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this.#hideTooltip.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = 'relative';
  }

  #showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
    this.shadowRoot.appendChild(this._tooltipContainer);
  }
  #hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

customElements.define('dw-tooltip', Tooltip);
