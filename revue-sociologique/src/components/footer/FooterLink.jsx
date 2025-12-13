import React from "react";

export const FooterLink = ({ href, children }) => {
  return (
    <a href={href} className="block text-sm text-gray-400 hover:text-white">
      {children}
    </a>
  );
};