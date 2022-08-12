<script lang="ts">
  export let image: string
  export let title: string
  export let year: number
  export let rating: string
  export let category: string
  export let bookmarked: boolean = false
</script>

<div 
  class="
    flex
    flex-col
    justify-end
    treding-item-container
    relative
    rounded-lg
    p-4
    overflow-hidden
    cursor-pointer
  "
>
  <div 
    class="
      bookmark-icon
      flex
      flex-row
      justify-center
      items-center
      absolute
      top-2
      right-4
      w-8
      h-8
      bg-black/[.4]
      hover:bg-black/[.7]
      rounded-full
      cursor-pointer
      z-50
    "
  >
    <img 
      data-testid="trending-item-bookmark-button"
      src={
      !bookmarked ? 
      'images/icon-bookmark-empty.svg' :
      'images/icon-bookmark-full.svg'
      } alt="">
  </div>
  <img 
    data-testid="trending-item-image" 
    class="
      absolute 
      w-full 
      top-0 
      right-0
      -z-50
    "
    src={image} 
    alt={title}
  >
  <div 
    class="
      info-text-container
      flex
      flex-row
      item-center
      justify-between
      w-40
    "
  >
    <div 
      data-testid="trending-item-year" 
      class="text-white text-body-s"
    >
      {year}
    </div>
    <div 
      data-testid="trending-item-type" 
      class="
        text-white 
        text-body-s
        flex
        flex-row
        items-center
        justify-center
      "
    >
      <img 
        class="mr-1"
        src={
          category === 'Movie' ? 
          'images/icon-category-movie.svg' :
          'images/icon-category-tv.svg'
        } alt="Category">
      {category}
    </div>
    <div 
      data-testid="trending-item-rating"
      class="text-white text-body-s"
    >
      {rating}
    </div>
  </div>
  <div 
    data-testid="trending-item-title" 
    class="
      text-white 
      text-s
      md:text-md
    "
  >
    {title}
  </div>
</div>