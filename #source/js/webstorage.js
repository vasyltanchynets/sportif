const recordSessionStorage = () => {
  let btnSubmit = document.getElementsByClassName("form__btn")[0];
  let name = document.getElementsByName("name")[0];
  let summary = document.getElementsByName("summary")[0];
  let review = document.getElementsByName("review")[0];
  let ratingsOverall = document.getElementsByName("rating-overall");
  let ratingsComfort = document.getElementsByName("rating-comfort");
  let ratingsQuality = document.getElementsByName("rating-quality");
  let ratingsFit = document.getElementsByName("rating-fit");

  btnSubmit.addEventListener("click", () => {
    sessionStorage.setItem("name", name.value);
    sessionStorage.setItem("summary", summary.value);
    sessionStorage.setItem("review", review.value);

    ratingsOverall.forEach((elem) => {
      if (elem.checked) {
        sessionStorage.setItem("rating-overall", elem.value);
      }
    });
    ratingsComfort.forEach((elem) => {
      if (elem.checked) {
        sessionStorage.setItem("rating-comfort", elem.value);
      }
    });
    ratingsQuality.forEach((elem) => {
      if (elem.checked) {
        sessionStorage.setItem("rating-quality", elem.value);
      }
    });
    ratingsFit.forEach((elem) => {
      if (elem.checked) {
        sessionStorage.setItem("rating-fit", elem.value);
      }
    });
  });
};
recordSessionStorage();
