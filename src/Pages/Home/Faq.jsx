import React, { useState } from 'react'


function Faq() {

  const data = [
    {
      name: "How long will it take to receive my Upaychat Mastercard® once I've accepted the card?",
      description: "  After you've sent your items to us, they're reviewed by a Upaychat team member. Our review will normally be completed within 24 hours of receiving the items. Then, you'll receive an email to accept the card, and when the card is accepted, a digital card will become available for you to use immediately via Apple Pay, Google Pay, or Samsung Pay. To access your digital card, please download our mobile app via the applicable app store."
    },
    {
      name: "Is Upaychat Mastercard® a secured credit card?",
      description: " Yes, Upaychat Mastercard® is an asset-backed secured credit card. However, most secured credit cards are secured via cash deposits, where Upaychat is secured by items such as fine jewelry."
    },
  ]

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
      <section>
        <div>
          <h2 className="faq-h2">FAQs</h2>
        </div>
        <div className="wrapper">
          <div className="accordion">
            {data.map((item, i) => (
                <div className="item">
                  <div className="title" onClick={() => toggle(i)}>
                    <h4>{item.name}</h4>
                    <span>{selected === i ? '-' : '+'}</span>
                  </div>

                  <div className={selected === i ? 'content show text-md' : 'content'}>{item.description}</div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Faq;