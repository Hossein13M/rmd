export interface BudgetValue {
    id: number;
    createdAt: string;
    titleEN: string;
    titleFA: string;
    budget: string;
    value: string;
}

export interface BudgetValueLegends {
    id: number;
    createdAt: string;
    budgetLegend: string;
    valueLegend: string;
}

export interface BudgetValueResponse {
    data: Array<BudgetValue>;
    legends: BudgetValueLegends;
}
