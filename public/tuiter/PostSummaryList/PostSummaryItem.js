const PostSummaryItem = (post) => {
  return `
        <div class="row mx-auto wd-tuit-border">
            <div class="col-9 p-3">
                <div class="wd-tuit-title">
                    ${post.topic}
                </div>
                <div class="wd-tuit-author">
                    ${post.userName} <i class="fa-solid fa-circle-check"></i> <span class="wd-tuit-time">-&nbsp;${post.time}</span>
                </div>
                <span class="wd-tuit-author">${post.title}</span>
            </div>
            <div class="col-3 p-3 m-auto">
                <img src="${post.image}" class="w-100 h-100 rounded"/>
            </div>
        </div>
    `;
};
export default PostSummaryItem;
