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
    class="info-container"
  >
    <div 
      class="
        details
        flex
        flex-row
        items-center
        justify-between
      "
    >
      <div 
        class="
          text-white
          text-body-m
        "
      >
        {year}
      </div>
      <div 
        class="
          flex 
          flex-row 
          items-center
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
        <div class="text-white ml-2">
          {category}
        </div>
      </div>
      <div class="text-white">
        {rating}
      </div>
    </div>
    <div 
      data-testid="thumbnail-title"
      class="
        text-white
        text-s
      "
    >
      {title}
    </div>
  </div>
</div>