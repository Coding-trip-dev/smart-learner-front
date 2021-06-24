import React from "react";

const OfferCourseTable = ({ headings, data }) => (
  <table className="table offer-course-step1-table table-borderless">
    <thead>
      <tr>
        {headings.map((h, i) => (
          <th key={i} scope="col">
            {h}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((d, i) => (
        <tr key={i}>
          <td>{d.degree}</td>
          <td>{d.document}</td>
          <td>
            <button className="btn-X">X</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default OfferCourseTable;
