import React from 'react'

const Testimonial = () => {
  return (
    <section>
      <div className="testimonal">
      <div className="small-container">
        <div className="row">
          <div className="col-3">
            <i className="fa-solid fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <div className="rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <img src="/img/user-1.png" alt="user-1" />
            <h3>Sean Parker</h3>
          </div>
          <div className="col-3">
            <i className="fa-solid fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <div className="rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <img src="/img/user-2.png" alt="user-2" />
            <h3>Mike Smith</h3>
          </div>
          <div className="col-3">
            <i className="fa-solid fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <div className="rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <img src="/img/user-3.png" alt="user-3" />
            <h3>Mabel Joe</h3>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Testimonial