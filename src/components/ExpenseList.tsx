import { useBudget } from "../hooks/useBudget"
import { useMemo } from "react"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {

    const { state } = useBudget()



    const filteredExpenses = state.filterCategory ?
        state.expenses.filter(expense => expense.category === state.filterCategory) :
        state.expenses

    const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses])
    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
            {isEmpty ?
                <p className="text-gray-600 text-2xl font-bold">No hay gastos</p>
                : (
                    <>
                        <p className="text-blue-900 text-2xl font-bold mt-5 pb-5">Listado de gastos</p>
                        {filteredExpenses.map(expense => (
                            <ExpenseDetail
                                key={expense.id}
                                expense={expense}
                            />
                        ))}
                    </>
                )}
        </div>
    )
}
