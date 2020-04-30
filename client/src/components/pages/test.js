const { BrowserRouter, Route, Link } = ReactRouterDOM;

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Home sidebar content</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>Bubblegum sidebar content</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>Shoelaces sidebar content</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

function SidebarExample() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "200px",
            background: "#f0f0f0"
          }}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bubblegum">Bubblegum</Link>
            </li>
            <li>
              <Link to="/shoelaces">Shoelaces</Link>
            </li>
          </ul>

					<p>Sidebar dynamic content:</p>
          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<SidebarExample />, document.getElementById('root'));