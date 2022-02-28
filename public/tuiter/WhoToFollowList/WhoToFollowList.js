import WhoToFollowListItem from './WhoToFollowListItem.js';
import who from './who.js';

const WhoToFollowList = () => {
  return `
            <ul class="list-group wd-follow-panel">
                <li class="list-group-item wd-tuit-author">Who to follow</li>
                ${who.map((item) => WhoToFollowListItem(item)).join('')}
            </ul>
    `;
};
export default WhoToFollowList;
