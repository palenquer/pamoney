import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
    return (
        <main className="container mx-auto py-2.5 px-1">
            <Summary/>
            <TransactionsTable/>
        </main>
    )
}
