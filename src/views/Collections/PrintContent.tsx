"use client";
import React from "react";

const PrintContent = ({ content }: { content: string }) => {
    const handlePrint = () => {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
          <html>
            <head>
              <title>Print Content</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                }
              </style>
            </head>
            <body>
              ${content}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    };
  
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <button onClick={handlePrint}>Print Content</button>
      </div>
    );
  };
  
  export default PrintContent;