import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  return (
    <div className="flex -mt-24 gap-8 m-auto max-w-screen-lg">
      <div className="bg-white py-6 px-8 rounded text-gray-700 w-1/3 md:w-80 shadow-md">
        <header className="flex items-center justify-between">
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong className="text-2xl leading-loose block mt-2">R$1000,00</strong>
      </div>

      <div className="bg-white py-6 px-8 rounded text-gray-700 w-1/3 md:w-80 shadow-md">
        <header className="flex items-center justify-between">
          <p>Entradas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong className="text-2xl leading-loose block mt-2">- R$500,00</strong> 
      </div>

      <div className="bg-green-400 py-6 px-8 rounded text-white w-1/3 md:w-80 shadow-md">
        <header className="flex items-center justify-between">
          <p>Total</p>
          <img src={totalImg} alt="Total" />    
        </header>
        <strong className="text-2xl leading-loose block mt-2">R$500,00</strong>
      </div>
    </div>
  );
}
