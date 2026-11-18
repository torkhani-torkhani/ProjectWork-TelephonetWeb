
import PhoneCard from "./PhoneCard"

function Products({phones , deletePhone}) {

  return (
    <section>
      <h1>Products</h1>
      <div className="phone">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} deletePhone={deletePhone} />
        ))}
      </div>
    </section>
  )
}

export default Products