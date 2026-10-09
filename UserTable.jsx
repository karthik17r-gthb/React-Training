function UserTable({ users, onEdit, onDelete, deletingId }) {
  if (users.length === 0) {
    return (
      <div className="empty-state">
        <h3>No users found</h3>
        <p>Add a new user using the form above.</p>
      </div>
    );
  }

  return (
    <div className="table-card">
      <div className="table-heading">
        <div>
          <h2>User Directory</h2>
          <p>Manage user details and account information.</p>
        </div>
        <span className="user-count">{users.length} users</span>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td className="name-cell">{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone || "—"}</td>
                <td>
                  {user.website ? (
                    <a
                      href={
                        /^https?:\/\//i.test(user.website)
                          ? user.website
                          : `https://${user.website}`
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.website}
                    </a>
                  ) : (
                    "—"
                  )}
                </td>
                <td>{user.address?.city || "—"}</td>
                <td>
                  <div className="row-actions">
                    <button
                      className="btn btn-edit"
                      type="button"
                      onClick={() => onEdit(user)}
                      disabled={deletingId !== null}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-delete"
                      type="button"
                      onClick={() => onDelete(user.id)}
                      disabled={deletingId === user.id}
                    >
                      {deletingId === user.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;