import Logo from "./Logo.jpg";

export default function Header() {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex flex-shrink-0 items-center">
        <img className="h-8 w-auto" style={{ height: 80 }} src={Logo} />
      </div>
    </div>
  );
}
