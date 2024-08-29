import Link from "next/link";

export default function PublicNavbar() {
  function activeMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.add("nav-active");
  }

  function desactiveMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.remove("nav-active");
  }

  return (
    <nav className="public-navbar container-public-navbar" id="home">
      <div className="nav-box">
        <div className="home-logo">
          <img src="./icon_logo.svg" alt="" className="icon" />
          <img src="./ras_logo.svg" alt="" className="text-icon" />
        </div>
        <div className="bar-btn-public">
          <img
            src="./icon_bars.svg"
            alt=""
            onClick={activeMenu}
            className="bar-btn-public"
          />
        </div>

        <div className="nav" id="nav-menu">
          <ul>
            <li>
              <Link href="./" className="Links" scroll={false}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="#about" className="Links" scroll={false}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#events" className="Links" scroll={false}>
                EVENTS
              </Link>
            </li>
            <li>
              <Link href="#ourteam" className="Links" scroll={false}>
                OUR TEAM
              </Link>
            </li>
            <li>
              <Link href="#proyects" className="Links" scroll={false}>
                PROYECTS
              </Link>
            </li>
            <li>
              <Link href="#blog" className="Links" scroll={false}>
                BLOG
              </Link>
            </li>
            <li>
              <Link href="#contact" className="Links" scroll={false}>
                CONTACT
              </Link>
            </li>
          </ul>

          <div className="close-menu">
            <img src="./x-svgrepo-com.svg" alt="" onClick={desactiveMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
