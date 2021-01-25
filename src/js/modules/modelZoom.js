export class ModelZoom {
  constructor(blockClass) {
    this.class = blockClass;

    this.block = document.querySelector(`.${this.class}`);
    console.log(this.block);
  };

  init() {
    if (this.block) {
      this.links = this.block.querySelectorAll(`.${this.class}__link`);
      this.onLinkClick = this.click.bind(this);
      this.links.forEach((link) => {link.addEventListener('click', this.onLinkClick)})
    }
  }

  click(evt) {
    evt.preventDefault();
    this.currentImage = evt.target;
    this.show(this.currentImage);
  }

  show(currentImage) {
    console.log(currentImage);
  }
}











const modelBlock = document.querySelector('.model');

// if (modelBlock) {
//   lightGallery(modelBlock.querySelector('.model__blocks'));
// }
