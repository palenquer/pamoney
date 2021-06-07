import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <header className="bg-purple-600 w-full text-white">
      <div className="m-auto container max-w-screen-lg flex px-2 pb-44 pt-4 items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src={logoImg} alt="pa money" />
          <span className="font-semibold text-lg mb-1">pa money</span>
        </div>

        <button
          className="text-sm md:text-md bg-purple-500 px-8 rounded h-10 transition duration-300 filter hover:brightness-90"
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova Transação
        </button>
      </div>
    </header>
  );
}
