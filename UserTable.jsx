import React from "react";
import { useSearchParams } from "react-router-dom";
import { usersData } from "../data/usersData";

const ITEMS_PER_PAGE = 5;

export default function UserTable() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read page from URL parameter, fallback to 1 if empty or invalid
  const currentPage = parseInt(searchParams.get("page")) || 1;

  // Pagination bounds calculation
  const totalPages = Math.ceil(usersData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  
  // Slice out the 5 records for the current page
  const currentRecords = usersData.slice(startIndex, endIndex);

  // Update URL state function
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ page: newPage });
    }
  };

  return (
    <div className="table-container">
      <h2>User Directory</h2>
      
  
      <div className="responsive-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td className="fw-semibold">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="pagination-controls">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          className="btn"
        >
          &larr; Previous
        </button>
        
        <span className="page-indicator">
          Page <strong>{currentPage}</strong> of {totalPages}
        </span>
        
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className="btn"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
