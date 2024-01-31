export const Menu = () => {
  return (
    <>
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#" className="text-red-500">
                  Logo
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-end space-x-4 gap-4 font-extralight">
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-red-600 rounded p-2">
                  Pedir minha pizza
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-red-600 rounded p-2">
                  Pedidos
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-red-600 rounded p-2">
                  Acompanhar meu pedido
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
