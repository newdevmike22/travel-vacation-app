const SocialTwo = () => {
  const links = [
    {
      id: 1,
      alink: "https://www.facebook.com/",
      icon: "fab fa-facebook",
    },
    {
      id: 2,
      alink: "https://www.twitter.com",
      icon: "fab fa-twitter",
    },
    {
      id: 3,
      alink: "https://www.squarespace.com/",
      icon: "fab fa-squarespace",
    },
  ];

  return (
    <ul className="nav-icons">
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.alink} target="_blank" className="nav-icon">
            <i className={link.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialTwo;
