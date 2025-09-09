import Logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="header__container flex justify-between ">
      <img src={Logo} alt="weather__app-logo" />
      <div className="unit__container text-white">UNITS</div>
    </header>
  );
}
