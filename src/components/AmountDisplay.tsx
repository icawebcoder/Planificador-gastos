import { formatCurrency } from "../helpers"

type AmountDisplayProps = {
    // El signo de interrogación tras el label, provoca que sea opción el incluir o no el label
    label?: string
    amount: number
}


export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
    return (
        <p className="text-2xl text-blue-900 font-bold">
            {label && `${label}:`}
            <span className="font-black">{formatCurrency(amount)}</span>
        </p>
    )
}
