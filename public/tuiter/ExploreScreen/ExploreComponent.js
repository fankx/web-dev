import PostSummaryList from '../PostSummaryList/PostSummaryList.js';

const ExploreComponent = () => {
  return `
        <!--search bar-->
        <div class="position-relative">
            <i class="fas fa-search fa-2x position-absolute"></i>
            <input
            id="search-bar"
            class="bg-opacity-10 form-control form-control-lg rounded-pill ps-5"
            placeholder="Search Tuiter"
            />
            <a href="explore-settings.html"
            ><i class="fas fa-cog fa-2x position-absolute"></i
            ></a>
        </div>

        <!--nav-tab-->
        <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="entertainment.html"><span class="d-none d-md-inline">Entertainment</span></a>
            </li>
        </ul>

        <!--starship pic-->
        <div class="position-relative">
          <img
          src="https://cdn.theatlantic.com/thumbor/Lk9bLJz93mioWjW6vdgYsAQ5zT0=/0x0:2500x1406/960x540/media/img/mt/2022/02/50703878421_7712bb60d3_o_1/original.jpg"
          alt="tuit"
          class="img-fluid"
          />
          <span id="img-text" class="position-absolute">
            SpaceX's Starship
          </span>
        </div>
        ${PostSummaryList()}
    `;
};
export default ExploreComponent;
