import { useEffect } from "react";
import { api } from "../../services/api";

export function TransactionsTable() {
    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, []);

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
                    <tr>
                        <td className="py-4 px-8 border-0 bg-white rounded">Desenvolvimento de Website</td>
                        <td className="py-4 px-8 border-0 bg-white text-green-500 rounded">R$12.000</td>
                        <td className="py-4 px-8 border-0 bg-white text-gray-500 rounded">Desenvolvimento</td>
                        <td className="py-4 px-8 border-0 bg-white text-gray-500 rounded">20/02/2021</td>
                    </tr>
                    <tr>
                        <td className="py-4 px-8 border-0 bg-white rounded">Aluguel</td>
                        <td className="py-4 px-8 border-0 bg-white rounded text-red-500">- R$1.100</td>
                        <td className="py-4 px-8 border-0 bg-white text-gray-500 rounded">Casa</td>
                        <td className="py-4 px-8 border-0 bg-white text-gray-500 rounded">17/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
