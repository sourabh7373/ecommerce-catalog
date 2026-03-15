type NavbarProps = {
  cartCount: number;
};

export default function Navbar({ cartCount }: NavbarProps) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">E-Commerce Catalog</h1>
      <div>Cart: {cartCount}</div>
    </nav>
  );
}