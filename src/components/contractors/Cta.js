import React from 'react';
import '../../styles/Contractors.css';

function Cta() {
  return (
    <section className="ctaContractors">
    <div className="squareCtaContractors">
      <h2 className="ctaTitleContractors">Take the stress out of finding <span id='orange'>the right pro</span></h2>
      <p className="ctaDescContractors">The research and interviews are already done for you.</p>
      <p className="ctaDescContractors">
        Establish yourself as the go-to contractor in your neighborhood and watch your business soar!
      </p>
      <p className='ctaSubDesc'>Consistent stream of quality leads, <br></br> guaranteed.</p>
      <br></br>
      <a className='buttonCtaContractors' href="#">Start now</a>
    </div>
  </section>
      );
}

export default Cta;
