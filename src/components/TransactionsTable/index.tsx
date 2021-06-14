import { useTransactions } from "../../hooks/useTransactions";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <div className="mt-16 m-auto max-w-screen-lg overflow-auto">
      <table className="w-full border-separate">
        <thead className="text-gray-500">
          <tr>
            <th className="py-4 px-8 text-left">Título</th>
            <th className="py-4 px-8 text-left">Valor</th>
            <th className="py-4 px-8 text-left">Categoria</th>
            <th className="py-4 px-8 text-left">Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td className="py-4 px-8 border-0 bg-white rounded">
                  {transaction.title}
                </td>
                <td
                  className={`${
                    transaction.type === "deposit"
                      ? "text-green-500"
                      : "text-red-500"
                  } py-4 px-8 border-0 bg-white rounded`}
                >
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td className="py-4 px-8 border-0 bg-white text-gray-500 rounded">
                  {transaction.category}
                </td>
                <td className="py-4 px-8 border-0 bg-white text-gray-500 rounded">
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
