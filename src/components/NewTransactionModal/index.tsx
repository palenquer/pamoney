import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import { RadioBox } from "../RadioBox";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="w-full max-w-xl bg-gray-100 p-12 relative rounded-md"
    >
      <button
        className="absolute right-6 top-6 border-0 bg-transparent transition duration-300 filter hover:brightness-75"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <form>
        <h2 className="text-gray-800 text-2xl mb-8">Cadastrar transação</h2>

        <input
          className="w-full px-6 h-16 rounded bg-gray-100 border border-gray-300 placeholder-gray-500"
          type="text"
          placeholder="Título"
        />

        <div className="mt-4 grid grid-cols-2 gap-2">
          <RadioBox
            isActive={type === "deposit"}
            isActiveStyle="bg-green-100"
            onClick={() => {
              setType("deposit");
            }}
          >
            <img className="w-20px h-20px" src={incomeImg} alt="Entrada" />
            <span className="inline-block ml-4 text-base text-gray-700">
              Entrada
            </span>
          </RadioBox>

          <RadioBox
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            isActiveStyle="bg-red-100"
          >
            <img className="w-20px h-20px" src={outcomeImg} alt="Saída" />
            <span className="inline-block ml-4 text-base text-gray-700">
              Saída
            </span>
          </RadioBox>
        </div>

        <input
          className="w-full px-6 h-16 rounded bg-gray-100 border border-gray-300 placeholder-gray-500 mt-4"
          type="number"
          placeholder="Valor"
        />

        <input
          className="w-full px-6 h-16 rounded bg-gray-100 border border-gray-300 placeholder-gray-500 mt-4"
          type="text"
          placeholder="Categoria"
        />

        <button
          className="w-full px-6 h-16 bg-green-400 text-white rounded border-0 mt-4 font-semibold transition duration-300 filter hover:brightness-90"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </Modal>
  );
}
