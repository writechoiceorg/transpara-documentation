import React from 'react';
import '../../css/accordion.css';

const Accordion = ({ title, children, open }) => {
  return (
    <details className="accordion_container" open={open}>
          <summary>
            <span className="accordion_call"><b>{title}</b></span>
            <div className="sumary_icon">
              <svg className="control-icon control-icon-expand" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16">
                <path fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
              <svg className="control-icon control-icon-close" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16">
                <path fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
              </svg>
            </div>
          </summary>
          <div className="accordion_content">
            {children}
          </div>
        </details>
  );
};

// const Accordion = ({ items }) => {
//   return (
//     <div className="accordion_group">
//       {items.map((item, index) => (
//         <details key={index} className="accordion_container">
//           <summary>
//             <span className="accordion_call">{item.title}</span>
//             <div className="sumary_icon">
//               <svg className="control-icon control-icon-expand" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 16 16">
//                 <path fillRule="evenodd"
//                   d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
//               </svg>
//               <svg className="control-icon control-icon-close" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 16 16">
//                 <path fillRule="evenodd"
//                   d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
//               </svg>
//             </div>
//           </summary>
//           <div className="accordion_content">
//             {item.content}
//           </div>
//         </details>
//       ))}
//     </div>
//   );
// };

export default Accordion;

