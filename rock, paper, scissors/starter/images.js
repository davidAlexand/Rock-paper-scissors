export class Images {
  view(viewImage) {
    if (viewImage) {
      var viewImage = document.querySelectorAll(viewImage);
      viewImage.forEach(images => {
        images.style.opacity = '1'; 
      });
    }
  }
  block(blockImage) {
    if (blockImage) {
      var blockImage = document.querySelectorAll(blockImage);
      blockImage.forEach(images => {
        images.style.opacity = '0';
      });
    }
  }
  opacity(opacityImage) {
    if (opacityImage) {
      var opacityImage = document.querySelectorAll(opacityImage);
      opacityImage.forEach(images => {
        images.style.opacity = '0.5';
      });
    }
  }
}
