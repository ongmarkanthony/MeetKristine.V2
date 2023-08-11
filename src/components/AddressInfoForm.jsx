import { useState } from 'react'

const AddressInfoForm = () => {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
    <div className="-mx-3 md:flex mb-6">
      <h2 className="md:w-1/3 px-3 mb-6 md:mb-0">Address Info</h2>
    </div>
    <div className="-mx-3 md:flex mb-6">
      <div className="md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-address1">
          Address 1
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-address1" type="text" placeholder="1234 Main St" value={address1} onChange={e => setAddress1(e.target.value)} />
      </div>
      <div className="md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-address2">
          Address 2
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-address2" type="text" placeholder="Apartment, studio, or floor" value={address2} onChange={e => setAddress2(e.target.value)} />
      </div>
    </div>
    <div className="-mx-3 md:flex mb-6">
      <div className="md:w-1/3 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
          City
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-city" type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
      </div>
      <div className="md:w-1/3 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-country">
          Country
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-country" type="text" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} />
      </div>
      <div className="md:w-1/3 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-postal-code">
          Postal Code
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-postal-code" type="text" placeholder="Postal Code" value={postalCode} onChange={e => setPostalCode(e.target.value)} />
      </div>
    </div>
  </div> 
  );
  
};
export default AddressInfoForm;