const imageWrapper = document.querySelector('.imageWrapper');

var folder = '../img/poster';

$.ajax({
  url: folder,
  success: function (data) {
    $(data)
      .find('a')
      .attr('href', function (i, val) {
        if (val.match(/\.(jpe?g|png|gif)$/)) {
          // $("body").append( "<img src='"+ folder + val +"'>" );
          imageWrapper.innerHTML += `
    <div class="swiper-slide">
    <div class="image-wrapper">
        <img class="s_story5 class_disable animated animate_story_txt" src="${val}"
            alt="Poster" />
    </div>
</div>
    `;
        }
      });
  },
});

// posterImg.forEach((item) => {
//   imageWrapper.innerHTML += `
//     <div class="swiper-slide">
//     <div class="image-wrapper">
//         <img class="s_story5 class_disable animated animate_story_txt" src="./img/poster/${item.id}.jpg"
//             alt="Poster" />
//     </div>
// </div>
//     `;
// });

const swiperScript = document.querySelector('.swiperScript');

studentVoice.forEach((student) => {
  swiperScript.innerHTML += `
    <div class="swiper-slide swiperQuotes" id="swiperQtsId">
						<div class="testimoniolBox">
							<img src="./img/right-quote.png" alt="quote" class="quoteImg">
							<div class="content">
                                <h1 class="titleName">${student.message.title}</h1>
								<p>${student.message.body}</p>
								<div class="studentInfo">
									<div class="studentImageCint"><img src="./img/student/${student.image}" alt=""
											class="studentImage">
									</div>
									<div class="studentDet">
										<p class="studentName">${student.name}</p>
										<p class="studentDesignation">${student.department}</p>
                                        <p class="studentDesignation studentBatch">${student.batch}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
    `;
});
