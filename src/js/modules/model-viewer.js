export class ModelViewer {
  constructor(blockClass) {
    this.class = blockClass;
    this.block = document.querySelector(`.${this.class}`);
  }

  init() {
    if (this.block) {
      this.links = this.block.querySelectorAll(`.${this.class}__link`);
      this.onLinkClick = this.click.bind(this);
      this.links.forEach((link) => {link.addEventListener('click', this.onLinkClick)});

      this.viewer = document.querySelector(`.${this.class}__viewer`);
      this.bigImage = this.viewer.querySelector(`.${this.class}__viewer-image`);
      this.closeButton = this.viewer.querySelector(`.${this.class}__viewer-close-button`);
    }
  }

  click(evt) {
    evt.preventDefault();
    this.currentImage = evt.target;
    this.show(this.currentImage);
  }

  show() {
    this.bigImage.setAttribute(`src`, this.currentImage.getAttribute(`src`));
    this.bigImage.setAttribute(`srcset`, this.currentImage.getAttribute(`srcset`));
    console.log(this.currentImage)

    document.body.classList.toggle(`overlay-open`, true);

    this.onCloseButtonClick = this.hide.bind(this);

    this.closeButton.addEventListener(`click`, this.onCloseButtonClick);

    this.viewer.classList.add(`model__viewer--show`);
    this.onViewerClick = this.viewerOverlayClick.bind(this);

    this.viewer.addEventListener(`click`, this.onViewerClick);

    this.onDocumentKeydown = this.keydown.bind(this);

    document.addEventListener(`keydown`, this.onDocumentKeydown);
  }

  hide() {
    document.body.classList.toggle(`overlay-open`, false);
    this.viewer.classList.toggle(`model__viewer--show`, false);
    this.closeButton.removeEventListener(`click`, this.onCloseButtonClick);

    this.viewer.removeEventListener(`click`, this.onViewerClick);
    document.removeEventListener(`keydown`, this.onDocumentKeydown);
    this.bigImage.setAttribute(`src`, null)
  }

  viewerOverlayClick(evt) {
    if (evt.target.className === this.viewer.className) {
      this.hide();
    }
  }

  keydown(evt) {
    if (evt.key === `Escape`) {
      this.hide();
    }
  }
}
