import { useState } from 'react'

const GovernmentInfoForm = () => {
  const [sss, setSSS] = useState("");
  const [philHealth, setPhilHealth] = useState("");
  const [hdmf, setHDMF] = useState("");
  const [tinNumber, setTINNumber] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="-mx-3 md:flex mb-6">
        <h2 className="md:w-1/3 px-3 mb-6 md:mb-0">Other Info</h2>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/4 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-sss">
            SSS
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-sss" type="text" placeholder="SSS" value={sss} onChange={e => setSSS(e.target.value)} />
        </div>
        <div className="md:w-1/4 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-philHealth">
            PhilHealth
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-philHealth" type="text" placeholder="PhilHealth" value={philHealth} onChange={e => setPhilHealth(e.target.value)} />
        </div>
        <div className="md:w-1/4 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-hdmf">
            HDMF
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-hdmf" type="text" placeholder="HDMF" value={hdmf} onChange={e => setHDMF(e.target.value)} />
        </div>
        <div className="md:w-1/4 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-tinNumber">
            TIN Number
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-tinNumber" type="text" placeholder="TIN Number" value={tinNumber} onChange={e => setTINNumber(e.target.value)} />
        </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-bankAccountNumber">
            Bank Account Number
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-bankAccountNumber" type="text" placeholder="Bank Account Number" value={bankAccountNumber} onChange={e => setBankAccountNumber(e.target.value)} />
        </div>
      <div className="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-bankName">
            Bank Name
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-bankName" type="text" placeholder="Bank Name" value={bankName} onChange={e => setBankName(e.target.value)} />
        </div>
      </div>
    </div>
    );
};
export default GovernmentInfoForm;