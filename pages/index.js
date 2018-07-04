import React from 'react';

import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

function Component() {
  return (
    <Layout>
      <div className="wrap">
        <h1 className="h1">About Safety Training</h1>
        <hr className="flourish" />
        <div className="photoBadge">
          <div className="headshotWrap">
            <img
              src="/static/img/headshot.jpg"
              alt="Photo of Ed Light"
              className="headshot"
            />
          </div>
          <h2 className="subtitle">
            OSHA Compliant Safety Training<br />With Ed Light, CSP
          </h2>
        </div>
        <br />
        <p className="align-center">
          Learn industry best-practices employed at Fortune 500 global
          corporations from a 30-year Health, Safety, Environmental (HSE)
          Veteran
        </p>
        <hr />
        <br />
        <h3>Ed's Background</h3>
        <br />
        <p>
          Health, Safety, Environmental (HSE) professional with comprehensive
          experience and success in conceiving, planning, developing, and
          executing strategic & tactical HSE and facilities initiatives that
          improve competitiveness through improved operating cost, productivity,
          employee satisfaction and compliance.
        </p>

        <p>
          HSE Strategy & Deployment Specialist – Both strategist and tactician.
          Consistent implementation of HSEF process improvements and
          standardization across 90 plus locations around the globe. Process
          improvements included initiatives such as safety data sheets,
          energy/green house gas reporting along with behavior based safety,
          high performance work team strategies and OSHA’s Voluntary Protection
          Program(s) resulting in Worker’s Compensation savings, injury
          reduction and cycle time reduction.
        </p>

        <p>
          Acquisition, Start-Ups and Transition Management - Effectively lead
          HSE considerations of manufacturing/engineering organizations through
          critical structuring including acquisitions, site closures,
          transitions/relocations and new facility startups.
        </p>

        <p>
          HSE Due Diligence - Participated in due diligence, supplier selection
          and contract negotiations for various services. Skilled at third party
          manufacturing, supplier audits, and social responsibility reviews.
        </p>

        <p>
          Situational Experience - Strengths include solving diverse HSE issues
          using a team approach. Proven ability to manage multi-site operations
          both domestic and international.
        </p>

        <p>
          HSEF Assessments - Skilled in needs assessments, problem
          identification/resolution and process re-engineering to achieve goals.
        </p>

        <p>
          Specialties: Process Improvement and Operational Excellence, Lean
          Principles, Honeywell Operating System (Silver Verification), Human
          Factors, Incident Investigation, Dangerous Goods Transportation (DOT /
          IATA), HSE Management Systems implementation including OSHA Voluntary
          Protection Programs, Electrical Work Practices, SharePoint 2007 and
          2013 implementation, Database creation, Web Design, AS9100 Aerospace
          Auditor
        </p>
        <br />
        <hr />
        <ContactForm />
        <br />
        <br />
      </div>
      <footer className="footer">
        ©{new Date().getUTCFullYear()} About Safety LLC
      </footer>
      <style jsx>
        {`
          .wrap {
            max-width: 600px;
            margin: 0 auto;
            padding: 1rem;
          }
          .h1 {
            padding: 3rem 0 2rem;
          }
          .align-center {
            text-align: center;
          }
          .flourish {
            height: 6px;
            background: url(/static/img/horiz-line.png) repeat-x 0 0;
            border: 0;
            margin: 0 0 2rem 0;
          }
          .photoBadge {
            display: flex;
            align-items: center;
          }
          .headshotWrap {
            display: block;
            flex: 1;
            max-width: 170px;
            height: auto;
            min-width: 120px;
          }
          .headshot {
            border-radius: 10px;
          }
          .subtitle {
            padding: 0 2rem;
            text-align: left;
          }
          .footer {
            text-align: center;
            padding: 3rem;
            background: #333;
            color: white;
          }
        `}
      </style>
    </Layout>
  );
}

export default Component;
