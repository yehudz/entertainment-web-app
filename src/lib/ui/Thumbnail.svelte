<script lang="ts">
import BookmarkButton from "./BookmarkButton.svelte"

  export let title: string
  export let year: number
  export let category: string
  export let rating: string
  export let image: string
  export let bookmark: boolean
</script>

<div
  data-testid="content-thumbnail" 
  class="
    thumbnail-container
    overflow-hidden
    relative
  "
>
  <BookmarkButton bookmark={bookmark}/>
  <div
    data-testid="thumbnail-image" 
    class="
      image-container
      rounded-lg
      overflow-hidden
    "
  >
    <img class="w-full" src={image} alt={title}>
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