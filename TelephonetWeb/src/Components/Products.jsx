import { useState } from "react"
import phonesData from "./PhonesData"
import PhoneCard from "./PhoneCard"

function Products() {
  const [phones, setPhones] = useState(phonesData)

  return (
    <section>
      <h1>Products</h1>
      <div className="phone">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </section>
  )
}

export default Products