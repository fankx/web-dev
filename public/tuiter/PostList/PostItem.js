import SummaryPicture from './SummaryPicture.js';
const PostItem = (post) => {
  return `
        <div class="rounded wd-background-grey row m-0 ps-2 pe-2 pt-2 pb-2">
            <div class="col-1 justify-content-center">
                <img class="wd-circle-icon" src="${post.icon}">
            </div>
        
            <div class="col-11 row ms-2">
                <!--text post-->
                <div class="col-11 mb-2">
                    <p class="wd-tuit-title">
                        <span class="wd-tuit-author">${post.userName}&nbsp;<i
                                class="fas fa-check-circle"></i></span>&nbsp;@${
                                  post.handle
                                }&nbsp;•&nbsp;${post.time}
                    </p>
                    <p class="wd-tuit-context">${post.content}</p>
                </div>
                <div class="col-1">
                    <a href="#" class="wd-font-white">...</a>
                </div>
                
                <!--summary picture and text-->
                ${SummaryPicture(post)}
                
                <!--post icons-->
                <div class="col-12 d-flex m-auto justify-content-between">
                        <a href="#" class="wd-tuit-time">
                            <span class="wd-tuit-time"><i class="far fa-comment fa-flip-horizontal"></i></span> &nbsp;${
                              post.comment_count
                            }</a>
                        <a href="#" class="wd-tuit-time">
                            <span class="wd-tuit-time"><i class="fas fa-retweet"></i></span> &nbsp;${
                              post.retweet_count
                            }</a>
                        <a href="#" class="wd-tuit-time">
                            <span class="wd-tuit-time"><i class="fas fa-heart"></i></span> &nbsp;${
                              post.like_count
                            }</a>
                        <a href="#" class="wd-tuit-time">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                </div>
            </div>
        </div>
    `;
};
export default PostItem;
