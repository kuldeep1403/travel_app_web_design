import React from "react";

const BookingSection = () => {
  return (
    <section className="section-booking">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Start booking now</h2>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  required
                  id="name"
                />
                <label htmlFor="name" className="form__lable">
                  Full name
                </label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  required
                  id="email"
                />
                <label htmlFor="email" className="form__lable">
                  Email address
                </label>
              </div>
              <div className="form-group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label htmlFor="small" className="form__radio-lable">
                    <span className="form__radio-button"></span>
                    Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label htmlFor="large" className="form__radio-lable">
                    <span className="form__radio-button"></span>
                    Large tour group
                  </label>
                </div>
              </div>
              <div className="form-group">
                <a href="/" className="btn btn--green">
                  Next step &rarr;
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
