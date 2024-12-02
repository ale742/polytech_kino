<script lang="ts">

</script>

<template>
<div class="row">
  <div class="col-md-4 my-3 ">
    <select class="form-select" aria-label="Default select example">
      <option selected>select ganre</option>
      <option value="name">Name</option>
      <option value="year">Year</option>
      <option value="rating">Rating</option>
    </select>
  </div>
  <div class="col-md-4 my-3">
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-md-2 my-3">
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-md-2 my-3">
    <button class="btn btn-outline-margin" type="submit">signUp</button>
  </div>
</div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100">
        <img src="https://duckduckgo.com/i/3318d9432b42f04e.jpg" class="card-img-top" alt="tor">
        <div class="card-body">
          <h5 class="card-title">Тор</h5>
          <p class="card-text"> 4.4</p>
          <p class="card-text">1 час 55 минут </p>
          <p class="card-text">фантастика </p>

        </div>
        <div class="cart-footer">
          <button class="btn btn-outline-success me-3" type="submit">смотреть</button>
        </div>
      </div>
    </div>
  </div>
  <nav class="d-flex justify-content-center my-5" aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>


</template>