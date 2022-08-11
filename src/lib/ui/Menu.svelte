<div 
  data-testid="navigation-container"
  class="
    menu-container 
    flex
    flex-row
    items-center
    justify-center
    h-56 
    w-full 
    bg-dark-grey
    md:h-72
    md:rounded-lg
    lg:h-screen
    lg:w-96
  "
>
  <div data-testid="logo" class="logo-container flex-1 ml-4 cursor-pointer">
    <img src="images/logo.svg" alt="Logo" class="h-6" >
  </div>
  <nav 
    data-testid="main-menu-container"
    class="flex flex-row flex-1 items-center justify-between"
  >
    <a 
      data-testid="all-filter" 
      href="/home" 
      class="active item"
    >
      <img 
        src="images/icon-nav-home.svg" 
        alt="Home">
    </a>
    <a 
      data-testid="movies-filter" 
      href="/movies"
      class="item"

    >
      <img 
        src="images/icon-nav-movies.svg" 
        alt="Movies"
      >
    </a>
    <a 
      data-testid="tv-shows-filter" 
      href="/shows"
      class="item"
    >
      <img 
        src="images/icon-nav-tv-series.svg" 
        alt="TV Shows"
      >
    </a>
    <a 
      data-testid="bookedmark-filter" 
      href="/bookmarks"
      class="item"
    >
      <img 
        src="images/icon-nav-bookmark.svg" 
        alt="Bookmarks"
      >
    </a>
  </nav>
  <div 
    data-testid="profile-button" 
    class="profile flex-1 flex justify-end items-center "
  >
    <img 
      src="images/image-avatar.png" 
      alt="Profile"
      class="h-8 mr-4 rounded-full border border-white cursor-pointer"
    >
  </div>
</div>