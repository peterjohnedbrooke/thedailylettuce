import React from 'react';
import Layout from '@/app/layout/layout';
import './terms-page.css';

async function TermsOfServicePage() {
  return (
    <Layout>
      <div className="terms__container">
        <h1 className="terms__title">Terms of Service</h1>
        <section className="terms__section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to our website. By accessing or using our service, you agree
            to be bound by these terms of service. Please read them carefully.
          </p>
        </section>
        <section className="terms__section">
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on our website for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license, you may
            not:
          </p>
          <ul>
            <li>modify or copy the materials</li>
            <li>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial)
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              our website
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials or
            </li>
            <li>
              transfer the materials to another person or "mirror" the materials
              on any other server.
            </li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by us at any time. Upon
            terminating your viewing of these materials or upon the termination
            of this license, you must destroy any downloaded materials in your
            possession whether in electronic or printed format.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default TermsOfServicePage;
