const WhoToFollowListItem = (who) => {
  return `
            <li class="list-group-item">
                <div class="row  d-flex justify-content-between">
                    <div class="col-9">
                        <div class="row d-flex justify-content-start">
                            <img src="${who.avatarIcon}" class="rounded-circle col-3">
                        <div class="col">
                            <div class="wd-tuit-author">
                                ${who.userName} <i class="fa-solid fa-circle-check"></i>
                            </div>
                            <div class="wd-tuit-account">
                                @${who.handle}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-3 m-auto">
                        <button class="btn btn-primary btn-block rounded-pill m-auto">
                        Follow
                        </button>
                    </div>
                </div>
            </li>        
    `;
};
export default WhoToFollowListItem;
