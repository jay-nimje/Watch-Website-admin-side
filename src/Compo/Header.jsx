import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div>
        {/* ======= Header ======= */}
        <header id="header" className="header fixed-top d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-between">
            <NavLink to="/index" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt />
              <span className="d-none d-lg-block">Admin</span>
            </NavLink>
            <i className="bi bi-list toggle-sidebar-btn" />
          </div>{/* End Logo */}
          <div className="search-bar">
            <form className="search-form d-flex align-items-center" method="POST" action="#">
              <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
              <button type="submit" title="Search"><i className="bi bi-search" /></button>
            </form>
          </div>{/* End Search Bar */}
          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                  <i className="bi bi-search" />
                </a>
              </li>{/* End Search Icon*/}
              <li className="nav-item dropdown">
                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-bell" />
                  <span className="badge bg-primary badge-number">4</span>
                </a>{/* End Notification Icon */}
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                  <li className="dropdown-header">
                    You have 4 new notifications
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning" />
                    <div>
                      <h4>Lorem Ipsum</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-x-circle text-danger" />
                    <div>
                      <h4>Atque rerum nesciunt</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>1 hr. ago</p>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-check-circle text-success" />
                    <div>
                      <h4>Sit rerum fuga</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>2 hrs. ago</p>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-info-circle text-primary" />
                    <div>
                      <h4>Dicta reprehenderit</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>4 hrs. ago</p>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                  </li>
                </ul>{/* End Notification Dropdown Items */}
              </li>{/* End Notification Nav */}
              <li className="nav-item dropdown">
                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-chat-left-text" />
                  <span className="badge bg-success badge-number">3</span>
                </a>{/* End Messages Icon */}
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                  <li className="dropdown-header">
                    You have 3 new messages
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="message-item">
                    <a href="#">
                      <img src="assets/img/messages-1.jpg" alt className="rounded-circle" />
                      <div>
                        <h4>Maria Hudson</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>4 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="message-item">
                    <a href="#">
                      <img src="assets/img/messages-2.jpg" alt className="rounded-circle" />
                      <div>
                        <h4>Anna Nelson</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>6 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="message-item">
                    <a href="#">
                      <img src="assets/img/messages-3.jpg" alt className="rounded-circle" />
                      <div>
                        <h4>David Muldon</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>8 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-footer">
                    <a href="#">Show all messages</a>
                  </li>
                </ul>{/* End Messages Dropdown Items */}
              </li>{/* End Messages Nav */}
              <li className="nav-item dropdown pe-3">
                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                  <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                  <span className="d-none d-md-block dropdown-toggle ps-2">j. Nimje</span>
                </a>{/* End Profile Iamge Icon */}
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li className="dropdown-header">
                    <h6>Jay Nimje</h6>
                    <span>Web Designer</span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                      <i className="bi bi-person" />
                      <span>My Profile</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                      <i className="bi bi-gear" />
                      <span>Account Settings</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                      <i className="bi bi-question-circle" />
                      <span>Need Help?</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <i className="bi bi-box-arrow-right" />
                      <span>Sign Out</span>
                    </a>
                  </li>
                </ul>{/* End Profile Dropdown Items */}
              </li>{/* End Profile Nav */}
            </ul>
          </nav>{/* End Icons Navigation */}
        </header>{/* End Header */}
        {/* ======= Sidebar ======= */}
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <NavLink className="nav-link " to="/index">
                <i className="bi bi-grid" />
                <span>Dashboard</span>
              </NavLink>
            </li>{/* End Dashboard Nav */}
            <li className="nav-item">
              <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-menu-button-wide" /><span>Categories</span><i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <NavLink to="/add_categories">
                    <i className="bi bi-circle" /><span>Add Categories</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/manage_categories">
                    <i className="bi bi-circle" /><span>Manage categories</span>
                  </NavLink>
                </li>
              </ul>
            </li>{/* End Components Nav */}
            <li className="nav-item">
              <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-journal-text" /><span>Product</span><i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <NavLink to="/add_product">
                    <i className="bi bi-circle" /><span>Add Product</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/manage_product">
                    <i className="bi bi-circle" /><span>Manage Product</span>
                  </NavLink>
                </li>
              </ul>
            </li>{/* End Forms Nav */}
            <li className="nav-item">
              <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-people-fill" /><span>User</span><i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <NavLink to="/user">
                    <i className="bi bi-circle" /><span>User</span>
                  </NavLink>
                </li>
              </ul>
            </li>{/* End Tables Nav */}
            <li className="nav-item">
              <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-telephone-fill" /><span>Contact</span><i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <NavLink to="/manage_contact">
                    <i className="bi bi-circle" /><span>Manage Contact</span>
                  </NavLink>
                </li>
              </ul>

              <li className="nav-item">
                <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                  <i class="bi bi-gem"></i><span>Blog</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <NavLink to="/add_blog">
                      <i class="bi bi-circle"></i><span>Add Blog</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/manage_blog">
                      <i class="bi bi-circle"></i><span>Manage Blog</span>
                    </NavLink>
                  </li>
                </ul>
              </li>

            </li>{/* End Charts Nav */}
            <li className="nav-item">
              <NavLink className="nav-link collapsed" to="pages-login.html">
                <i className="bi bi-box-arrow-in-right" />
                <span>Logout</span>
              </NavLink>
            </li>
          </ul>
        </aside>{/* End Sidebar*/}
      </div>


    </div>
  )
}

export default Header