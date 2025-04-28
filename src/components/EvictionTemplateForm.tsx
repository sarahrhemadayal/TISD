'use client';

import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function EvictionNoticeForm() {
  const formRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-[8.5in] mx-auto px-8 py-10 font-serif text-[15px] leading-7 print:p-0">
      <div
        id="preview"
        ref={formRef}
        className="bg-white px-10 py-12 border border-gray-300 shadow-sm text-black space-y-6 print:shadow-none print:border-none"
        style={{ textAlign: "justify" }}
      >
        <h2 className="text-center text-xl font-extrabold uppercase tracking-wide mb-6">
          Eviction Notice
        </h2>

        <p>
          PLEASE TAKE NOTICE that upon the tenancy pursuant to the lease and/or rental agreement dated{' '}
          <input className="inline-block border-b border-black w-40 mx-1 outline-none" placeholder="MM/DD/YYYY" />, under which you hold possession of the described premises,
          there is now due unpaid and delinquent rent in the total sum of{' '}
          <input className="inline-block border-b border-black w-24 mx-1 outline-none" placeholder="$Amount" />, representing rent due for the period from{' '}
          <input className="inline-block border-b border-black w-24 mx-1 outline-none" placeholder="Start Date" /> to{' '}
          <input className="inline-block border-b border-black w-24 mx-1 outline-none" placeholder="End Date" />.
        </p>

        <h3 className="font-bold">Notice to Pay or Quit</h3>
        <p>
          PLEASE TAKE FURTHER NOTICE that within{' '}
          <input className="inline-block border-b border-black w-12 mx-1 outline-none" placeholder="#" /> days after service of this notice, you are hereby required to pay the above-listed amount in full OR quit the subject premises, move out, and deliver possession of the same to{' '}
          <input className="inline-block border-b border-black w-64 mx-1 outline-none" placeholder="Landlord/Property Manager Name" />.
        </p>
        <p>
          Failure to pay the rent in full OR vacate the premises WITHIN the specified number of days as required by this notice will result in forfeiture of the lease and/or rental agreement, and legal proceedings will be instituted against you to recover rent, damages, and possession of the premises.
        </p>

        <h3 className="font-bold">Notice to Cure or Quit</h3>
        <p>
          PLEASE TAKE NOTICE that you have violated the following term(s) in your lease and/or rental agreement dated{' '}
          <input className="inline-block border-b border-black w-40 mx-1 outline-none" placeholder="Lease Date" />:
        </p>
        <p>
          Violation(s):{' '}
          <input className="inline-block border-b border-black w-full outline-none mt-1" placeholder="Describe Lease Violation(s)" />
        </p>
        <p>
          PLEASE TAKE FURTHER NOTICE that within{' '}
          <input className="inline-block border-b border-black w-12 mx-1 outline-none" placeholder="#" /> days after service of this notice, you are hereby required to remedy the violation(s) OR quit the subject premises, move out, and deliver possession of the same to the landlord/property manager.
        </p>

        <h3 className="font-bold">Notice of Termination</h3>
        <p>
          PLEASE TAKE NOTICE that your month-to-month tenancy under which you hold possession of the described premises is hereby terminated as of{' '}
          <input className="inline-block border-b border-black w-40 mx-1 outline-none" placeholder="Termination Date" />, which is{' '}
          <input className="inline-block border-b border-black w-12 mx-1 outline-none" placeholder="#" /> days after service of this notice. YOU ARE HEREBY required to quit and surrender possession thereof to the landlord/property manager on or before the termination date.
        </p>

        <h3 className="font-bold">Reason for Eviction</h3>
        <p>
          The reason this notice is being served is:{' '}
          <input className="inline-block border-b border-black w-full outline-none mt-1" placeholder="Describe Reason for Eviction" />
        </p>

        <p className="text-sm text-gray-700">
          LANDLORD RESERVES ALL RIGHTS AND REMEDIES PROVIDED UNDER THE RENTAL AGREEMENT AND APPLICABLE LAWS, INCLUDING BUT NOT LIMITED TO DAMAGES FOR UNPAID RENT OR PROPERTY DAMAGE. NOTHING IN THIS NOTICE MAY BE CONSTRUED AS A WAIVER OF SUCH RIGHTS AND REMEDIES.
        </p>

        <h3 className="font-bold">Signature and Acknowledgment</h3>
        <p>
          Landlord/Property Manager Name:{' '}
          <input className="inline-block border-b border-black w-64 mx-1 outline-none" placeholder="" />
        </p>
        <p>
          Signature:{' '}
          <input className="inline-block border-b border-black w-48 mx-1 outline-none" placeholder="" />
        </p>
        <p>
          Date:{' '}
          <input className="inline-block border-b border-black w-32 mx-1 outline-none" placeholder="MM/DD/YYYY" />
        </p>

        <h3 className="font-bold">Optional Notary Acknowledgment</h3>
        <p>
          State of{' '}
          <input className="inline-block border-b border-black w-40 mx-1 outline-none" placeholder="" />
        </p>
        <p>
          County of{' '}
          <input className="inline-block border-b border-black w-40 mx-1 outline-none" placeholder="" />
        </p>
        <p>
          On this{' '}
          <input className="inline-block border-b border-black w-10 mx-1 outline-none" placeholder="" /> day of{' '}
          <input className="inline-block border-b border-black w-32 mx-1 outline-none" placeholder="Month" />, 20__, before me, the undersigned notary public, personally appeared{' '}
          <input className="inline-block border-b border-black w-64 mx-1 outline-none" placeholder="Landlord/Manager Name" />, known to me (or satisfactorily proven) to be the person whose name is signed above and acknowledged that they executed this Notice to Quit.
        </p>
        <p>
          Notary Public Signature:{' '}
          <input className="inline-block border-b border-black w-64 mx-1 outline-none" placeholder="" />
        </p>
        <p>Notary Seal:</p>

        <p className="text-xs text-center text-gray-500 pt-4">
          This document serves as an official Notice to Quit and complies with applicable landlord-tenant laws.
        </p>

        <footer className="text-xs text-center text-gray-500 pt-8 print:block hidden">
          Copyright © {new Date().getFullYear()} NextGenLegal.com. All Rights Reserved.
          <br />
        </footer>
      </div>

      {/* Print Button */}
      <div className="flex justify-end no-print mt-6 print:hidden">
        <Button
          onClick={handlePrint}
          className="bg-red-600 text-white hover:bg-red-700 rounded-xl px-6 py-2 text-base font-semibold shadow"
        >
          Download as PDF
        </Button>
      </div>
    </div>
  );
}
