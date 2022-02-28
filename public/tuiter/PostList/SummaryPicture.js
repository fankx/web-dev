const SummaryPicture = (post) => {
  if (post.title === undefined) {
    return `
            <!--summary picture-->
            <div class="col-12">
                <div class="wd-border-1px wd-rounded-corners-all-around">
                    <img class="img-fluid wd-rounded-corners-all-around" src="${post.image}"/>
                </div>
            </div>
        `;
  } else {
    return `
            <!--summary picture-->
            <div class="col-12">
                <div class="wd-tuit-border wd-rounded-corners-top">
                    <img class="img-fluid wd-rounded-corners-top" src="${post.image}"/>
                </div>
            </div>
            <!--summary text-->
            <div class="col-12">
                <div class="wd-tuit-border wd-rounded-corners-bottom p-3">
                    <div class="wd-tuit-author">${post.title}</div>
                    <span class="wd-tuit-time">${post.summary}</span>
                    <span class="wd-tuit-time">
                        <i class="fas fa-link fa-xs"></i>${post.link}
                    </span>
                </div>
            </div>
        `;
  }
};
export default SummaryPicture;
