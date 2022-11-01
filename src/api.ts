export interface CurrencyInputValue {
    number: number | null
    formatted: string | null
}

export interface NumberRange {
    min?: number
    max?: number
}

export enum CurrencyDisplay {
    symbol = 'symbol',
    narrowSymbol = 'narrowSymbol',
    code = 'code',
    name = 'name',
    hidden = 'hidden'
}

export enum ValueScaling {
    precision = 'precision',
    thousands = 'thousands',
    millions = 'millions',
    billions = 'billions'
}

export interface CurrencyFormatOptions {
    locale?: string
    currency: string
    currencyDisplay?: CurrencyDisplay
    precision?: NumberRange | number
    accountingSign?: boolean
}

export interface CurrencyInputOptions extends CurrencyFormatOptions {
    hideCurrencySymbolOnFocus?: boolean
    hideGroupingSeparatorOnFocus?: boolean
    hideNegligibleDecimalDigitsOnFocus?: boolean
    autoDecimalDigits?: boolean
    valueRange?: NumberRange
    useGrouping?: boolean
    valueScaling?: ValueScaling
}
