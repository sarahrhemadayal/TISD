'use client';

import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function NDATemplateForm() {
  const formRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className=" max-w-[8.5in] mx-auto px-8 py-10 font-serif text-[15px] leading-7 print:p-0">
      <div
        id="preview"
        ref={formRef}
        className="bg-white px-10 py-12 border border-gray-300 shadow-sm text-black space-y-6 print:shadow-none print:border-none"
        style={{ textAlign: "justify" }}
      >
        <h2 className="text-center text-xl font-extrabold uppercase tracking-wide mb-6">
          Non-Disclosure Agreement (NDA)
        </h2>

        <p>
          This Nondisclosure Agreement or ("Agreement") has been entered into on the date of{" "}
          <input className="inline-block border-b border-black w-40 mx-1 outline-none" placeholder="MM/DD/YYYY" />
          and is by and between:
        </p>

        <p>
          <strong>Party Disclosing Information:</strong> <br />
          <input className="inline-block border-b border-black w-full outline-none mt-1 mb-2" placeholder="Full Name" /><br />
          with a mailing address of <input className="inline-block border-b border-black w-full outline-none mt-1" placeholder="Mailing Address" /> (“Disclosing Party”).
        </p>

        <p>
          <strong>Party Receiving Information:</strong> <br />
          <input className="inline-block border-b border-black w-full outline-none mt-1 mb-2" placeholder="Full Name" /><br />
          with a mailing address of <input className="inline-block border-b border-black w-full outline-none mt-1" placeholder="Mailing Address" /> (“Receiving Party”).
        </p>

        <p>
          For the purpose of preventing the unauthorized disclosure of Confidential Information as defined below, the parties agree to enter into a confidential relationship concerning the disclosure of certain proprietary and confidential information ("Confidential Information").
        </p>

        <p>
          <strong>1. Definition of Confidential Information.</strong> For purposes of this Agreement, "Confidential Information" shall include all information or material that has or could have commercial value or other utility in the business in which Disclosing Party is engaged. If Confidential Information is in written form, the Disclosing Party shall label or stamp the materials with the word "Confidential" or some similar warning. If Confidential Information is transmitted orally, the Disclosing Party shall promptly provide writing indicating that such oral communication constituted Confidential Information.
        </p>

        <p>
          <strong>2. Exclusions from Confidential Information.</strong> Receiving Party’s obligations under this Agreement do not extend to information that is: (a) publicly known at the time of disclosure or subsequently becomes publicly known through no fault of the Receiving Party; (b) discovered or created by the Receiving Party before disclosure by Disclosing Party; (c) learned by the Receiving Party through legitimate means other than from the Disclosing Party or Disclosing Party's representatives; or (d) is disclosed by Receiving Party with Disclosing Party's prior written approval.
        </p>

        <p>
          <strong>3. Obligations of Receiving Party.</strong> Receiving Party shall hold and maintain the Confidential Information in strict confidence for the sole and exclusive benefit of the Disclosing Party. Receiving Party shall carefully restrict access to Confidential Information to employees, contractors and third parties as is reasonably required and shall require those persons to sign nondisclosure restrictions at least as protective as those in this Agreement. Receiving Party shall not, without the prior written approval of Disclosing Party, use for Receiving Party's benefit, publish, copy, or otherwise disclose to others, or permit the use by others for their benefit or to the detriment of Disclosing Party, any Confidential Information. Receiving Party shall return to Disclosing Party any and all records, notes, and other written, printed, or tangible materials in its possession pertaining to Confidential Information immediately if Disclosing Party requests it in writing.
        </p>

        <p>
          <strong>4. Time Periods.</strong> The nondisclosure provisions of this Agreement shall survive the termination of this Agreement and Receiving Party’s duty to hold Confidential Information in confidence shall remain in effect until the Confidential Information no longer qualifies as a trade secret or until Disclosing Party sends Receiving Party written notice releasing Receiving Party from this Agreement, whichever occurs first.
        </p>

        <div className="grid grid-cols-2 gap-12 pt-8">
          <div>
            <p className="font-semibold">The Disclosing Party:</p>
            <p className="mt-1">
              Signature: <input className="border-b border-black w-40 mx-1 outline-none" placeholder="Signature" />
            </p>
            <p className="mt-1">
              Date: <input className="border-b border-black w-32 mx-1 outline-none" placeholder="MM/DD/YYYY" />
            </p>
          </div>
          <div>
            <p className="font-semibold">The Receiving Party:</p>
            <p className="mt-1">
              Signature: <input className="border-b border-black w-40 mx-1 outline-none" placeholder="" />
            </p>
            <p className="mt-1">
              Date: <input className="border-b border-black w-32 mx-1 outline-none" placeholder="MM/DD/YYYY" />
            </p>
          </div>
        </div>
      </div>

      {/* Print Button */}
      <div className="flex justify-end no-print mt-6">
        <Button
          onClick={handlePrint}
          className="bg-red-600 text-white hover:bg-red-700 rounded-xl px-6 py-2 text-base font-semibold shadow"
        >
          Download as PDF
        </Button>
      </div>

      {/* Footer only on print */}
      <footer className="text-xs text-center text-gray-500 pt-8 print:block hidden">
        Copyright © {new Date().getFullYear()} NonDisclosureAgreement.com. All Rights Reserved. <br />
      </footer>
      
    </div>
  );
}
