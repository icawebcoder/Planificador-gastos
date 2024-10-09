import { createContext, useReducer, Dispatch, ReactNode } from "react"
import { BudgetAction, BudgetState, budgetReducer, initialState } from "../reducers/budget-reducer"
import { useMemo } from "react"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetAction>
    totalExpenses: number
    remainingBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

// El argumento que espera, también se puede asignar como Null para quitar el error.

export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps)



// El Provider es el proveedor de los datos, y siempre es un Arrow Functions
// En este caso, viene del BudgetReducer que es donde se encuentra el State.

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExpenses = useMemo(() => state!.expenses.reduce((total, expense) => expense.amount + total, 0), [state!.expenses])

    const remainingBudget = state!.budget - totalExpenses

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                remainingBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}