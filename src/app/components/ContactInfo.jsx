import React from 'react';

const ContactInfo = () => (
  <div className="space-y-4 text-white text-lg">
    <div>
      <span className="font-bold">Phone Number:</span> +966543330505
    </div>
    <div>
      <span className="font-bold">WhatsApp:</span> +966543330505
    </div>
    <div>
      <span className="font-bold">Email Address:</span> <a href="mailto:Info@lucamiro.me" className="underline hover:text-[#f5b314]">Info@lucamiro.me</a>
    </div>
    <div>
      <span className="font-bold">Instagram:</span> <a href="https://www.instagram.com/studio13_lmi" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#f5b314]">studio13_lmi</a>
    </div>
    <div>
      <span className="font-bold">Address:</span>
      <ul className="list-disc list-inside ml-4">
        <li>JEDDAH, SAUDI ARABIA</li>
        <li>DUBAI, UAE</li>
        <li>USA</li>
        <li>RUSSIA</li>
        <li>KZ</li>
      </ul>
    </div>
  </div>
);

export default ContactInfo;