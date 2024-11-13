import Logo from "./../assets/Logo.jpg";
import "./index.css";

export default function Header() {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex flex-shrink-0 items-center">
        <img className="logo h-8 w-auto" src={Logo} alt="logo" />
      </div>
    </div>
  );
}
