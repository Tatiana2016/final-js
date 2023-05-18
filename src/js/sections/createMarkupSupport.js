export function createImageItemMurkup(supportList) {
  let num = 0;
  const markup = supportList
    .map(({ title, url, img1, img2, width, height }) => {
      return `<div class="swiper-slide">
    <a
      class="support__link"
      href="${url}"
      target="_blank"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <span class="support__number">0${(num += 1)}</span>
      <div style="max-width: ${width}px; max-height: ${height}px">
      <picture>
            <source
                srcset="
                ${img1} 1x,
                ${img2} 2x"
                type="image/png"
            >
            <img
            class="support__img" 
            
                src="${img1}"
                alt="${title}">
        </picture> 
        </div>
    </a>
  </div>`;
    })
    .join('');

  return markup;
}
