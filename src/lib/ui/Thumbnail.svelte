<script lang="ts">
  import data from '../../data.json';
  import BookmarkButton from "./BookmarkButton.svelte"
  import PlayButtonOverlay from "./PlayButtonOverlay.svelte";
  export let title: string
  export let year: number
  export let category: string
  export let rating: string
  export let image: string
  export let bookmark: boolean

  let showOverlay = false

  function toggleOverlay() {
    showOverlay = !showOverlay
  }

  function toggleBookmark(e: any) {
    data.find((o, i) => {
      if (o.title === title) {
          data[i] = { 
            title,
            year,
            rating,
            category,
            thumbnail: {
              regular: {
                small: image,
                medium: image,
                large: image,
              },
              trending: {
                small: image,
                large: image
              },
            },
            isTrending: false,
            isBookmarked: e.detail.bookmark
          };
          return true; // stop searching
      }
    });
  }
</script>

<div
  data-testid="content-thumbnail" 
  class="
    thumbnail-container
    overflow-hidden
    relative
    cursor-pointer
  "
>
  <BookmarkButton 
    bookmark={bookmark}
    on:trigger={toggleBookmark}
  />
  <div
    data-testid="thumbnail-image" 
    on:mouseenter={toggleOverlay}
    on:mouseleave={toggleOverlay}
    class="
      image-container
      rounded-lg
      overflow-hidden
      relative
    "
  >
    {#if showOverlay}
      <PlayButtonOverlay />
    {/if}
    <img
      class={`
        w-full 
        ${showOverlay ? 
        'opacity-30' : 
        ''
        }
      `} 
      src={image} 
      alt={title}>
  </div>
  <div
    data-testid="thumbnail-details" 
    class="info-container w-4/6 md:w-2/3"
  >
    <div 
      class="
        details
        flex
        flex-row
        justify-between
        mt-4
      "
    >
      <div 
        class="
          text-light-grey
          text-body-s
        "
      >
        {year}
      </div>
      <div 
        class="
          flex 
          flex-row 
          items-center
          mx-4
        "
      >
        <img 
          src={
            category === 'Movie' ?
            'images/icon-category-movie.svg' :
            'images/icon-category-tv.svg'
          } 
          alt={category}
        >
        <div 
          class="
            text-light-grey
            text-body-s 
            ml-1
            whitespace-nowrap
          "
        >
          {category}
        </div>
      </div>
      <div 
        class="
          text-light-grey
          text-body-s
        "
      >
        {rating}
      </div>
    </div>
    <div 
      data-testid="thumbnail-title"
      class="
        text-white
        text-s
        md:text-md
        whitespace-nowrap
        mt-2
      "
    >
      {title}
    </div>
  </div>
</div>