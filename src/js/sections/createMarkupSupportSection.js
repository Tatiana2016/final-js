export function createImageItemMurkup(supportList) {
  let num = 0;
  const markup = supportList
    .map(({ title, url, img, width, height }) => {
      return `<div class="swiper-slide">
      <a
        class="support__link"
        href="${url}"
        target="_blank"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <span class="support__number">0${(num += 1)}</span>
        <img
          class="support__img"
          style="width: ${width}px !important; height: ${height}px !important"
          src="${img}"
          alt="${title}"
        />
      </a>
    </div>`;
    })
    .join('');

  return markup;
}
