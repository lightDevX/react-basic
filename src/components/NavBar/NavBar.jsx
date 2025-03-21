const NavBar = () => {
  const services = [
    { id: 1, name: "Web Development", path: "/services/web-development" },
    { id: 2, name: "Graphic Design", path: "/services/graphic-design" },
    { id: 3, name: "SEO Optimization", path: "/services/seo-optimization" },
    { id: 4, name: "Digital Marketing", path: "/services/digital-marketing" },
    { id: 5, name: "App Development", path: "/services/app-development" },
    { id: 6, name: "Content Writing", path: "/services/content-writing" },
    {
      id: 7,
      name: "E-commerce Solutions",
      path: "/services/ecommerce-solutions",
    },
  ];
  return (
    <>
      <nav>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <a href={service.path}></a>
              {service.name}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
