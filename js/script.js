const imageWrapper = document.querySelector('.imageWrapper');

posterImg.forEach((item) => {
  imageWrapper.innerHTML += `
    <div class="swiper-slide">
    <div class="image-wrapper">
        <img class="s_story5 class_disable animated animate_story_txt" src="./img/poster/${item.id}.jpg"
            alt="Poster" />
    </div>
</div>
    `;
});
