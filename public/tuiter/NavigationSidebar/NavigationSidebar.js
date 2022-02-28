const NavigationSidebar = (active) => {
  return `
  <div class="list-group wd-navigation-bar" style="font-size: 1.4rem;">
    <a href="#" class="list-group-item list-group-item-action">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="../HomeScreen/home.html" 
       class="list-group-item list-group-item-action ${
         active === 'Home' ? 'active' : ''
       }"
    >
      <i class="fas fa-home"></i><span class="d-none d-xl-inline wd-list-group-item-text"> Home</span></a
    >
    <a
      href="../ExploreScreen/explore.html"
      class="list-group-item list-group-item-action ${
        active === 'Explore' ? 'active' : ''
      }"
    >
      <i class="fa-solid fa-hashtag"></i> <span class="d-none d-xl-inline wd-list-group-item-text"> Explore</span></a
    >
    <a
      href="notifications.html"
      class="list-group-item list-group-item-action"
      ><i class="fas fa-bell"></i><span class="d-none d-xl-inline wd-list-group-item-text"> Notifications</span></a
    >
    <a href="messages.html" class="list-group-item list-group-item-action"
      ><i class="fas fa-envelope"></i><span class="d-none d-xl-inline wd-list-group-item-text"> Messages</span></a
    >
    <a
      href="bookmarks.html"
      class="list-group-item list-group-item-action"
      ><i class="fas fa-bookmark"></i><span class="d-none d-xl-inline wd-list-group-item-text"> Bookmarks</span></a
    >
    <a href="lists.html" class="list-group-item list-group-item-action"
      ><i class="fas fa-list-alt"></i> <span class="d-none d-xl-inline wd-list-group-item-text"> Lists</span></a
    >
    <a href="profile.html" class="list-group-item list-group-item-action"
      ><i class="fas fa-user"></i> <span class="d-none d-xl-inline wd-list-group-item-text"> Profile</span></a
    >
    <a href="more.html" class="list-group-item list-group-item-action">                    
      <span class="fa-stack">
        <i class="fa-regular fa-circle fa-stack-1x"></i>
        <i class="fa-solid fa-ellipsis fa-stack-1x"></i>
      </span>
      <span class="d-none d-xl-inline wd-list-group-item-text">More</span>
    </a>
  </div>
  <button id="tuit-btn" class="btn btn-primary btn-block rounded-pill mt-2">
    Tuit
  </button>
    `;
};
export default NavigationSidebar;
