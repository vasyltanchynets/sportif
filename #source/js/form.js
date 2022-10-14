function ratings() {
  const ratings = document.querySelectorAll(".form__rating");
  if (ratings.length > 0) {
    initRatings();
  }

  function initRatings() {
    let ratingActive;
    let ratingValue;

    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    }

    function initRating(rating) {
      initRatingVars(rating);
      setRatingActiveWidth();

      if (rating.classList.contains("rating_set")) {
        setRating(rating);
      }
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector(".form__rating-active");
      ratingValue = rating.querySelector(".form__rating-value");
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
      const ratingItems = rating.querySelectorAll(".form__rating-item");

      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];

        ratingItem.addEventListener("mouseenter", function (e) {
          initRatingVars(rating);
          setRatingActiveWidth(ratingItem.value);
        });

        ratingItem.addEventListener("mouseleave", function (e) {
          setRatingActiveWidth();
        });

        ratingItem.addEventListener("click", function (e) {
          initRatingVars(rating);

          if (rating.dataset.ajax) {
            setRatingValue(ratingItem.value, rating);
          } else {
            ratingValue.innerHTML = index + 1;
            setRatingActiveWidth();
          }
        });
      }
    }
  }
}
ratings();

function validateForm() {
  let btnSubmit = document.getElementsByClassName("form__btn")[0];

  let [...fieldName] = document.getElementsByName("name");

  let nameRegx = /^[A-z]+$/g;
  let nameRes;

  fieldName[0].addEventListener("change", (e) => {
    nameRes = nameRegx.test(fieldName[0].value);

    if (nameRes) {
      fieldName[0].classList = "input";
    } else {
      fieldName[0].classList = "input error";
    }
  });

  btnSubmit.addEventListener("click", (e) => {
    if (fieldName[0].value == "") {
      fieldName[0].classList = "input error";
      e.preventDefault();
    }

    if (nameRes) {
      fieldName[0].classList = "input";
    } else {
      fieldName[0].classList = "input error";
      e.preventDefault();
    }
  });
}
validateForm();
