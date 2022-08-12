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
    treding-item-container
    relative
  "
>
  <div class="bookmark-icon">
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
    class="absolute w-full top-0 left-0"
    src={image} 
    alt={title}
  >
  <div class="info-text-container">
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
        src={
          category === 'Movie' ? 
          'images/icon-category-moviesvg' :
          'image/icon-category-tv.svg'
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
    class="text-white text-md-light"
  >
    {title}
  </div>
</div>