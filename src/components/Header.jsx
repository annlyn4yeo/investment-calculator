import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="money-bag-logo" />
      <h1>Your Investment Calculator</h1>
    </header>
  );
}
