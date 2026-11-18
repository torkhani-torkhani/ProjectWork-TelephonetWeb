function PhoneCard({ phone }) {
  return (
    <div className="phone-card">
      <h3>{phone.name}</h3>
      <p>{phone.brand}</p>
      <p>${phone.price}   {phone.rating}</p>
      <p>{phone.ram}GB RAM  {phone.storage}GB </p>
    </div>
  );
}

export default PhoneCard