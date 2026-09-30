import { NavLink, Outlet } from 'react-router-dom';

export default function ServicesLayout() {
  return (
    <div className="container">
      <h1 className="page-header">Our Specialized Services</h1>
      <p>Select a service below to explore our core specialities and production methodologies.</p>
      
      <div className="nested-layout">
        {/* Nested Navigation Sidebar */}
        <aside className="sidebar">
          <NavLink to="web-development" end>Web Development</NavLink>
          <NavLink to="app-development">App Development</NavLink>
          <NavLink to="ui-ux-design">UI/UX Design</NavLink>
        </aside>

        {/* Dynamic Nested Target Component Window */}
        <main className="nested-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
