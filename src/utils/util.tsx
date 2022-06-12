import { CategoryExpenseRow } from "../interfaces/category-expense-row";
import { OverviewRow } from "../interfaces/overview-row";

export function convertOverviewData(usage: Array<any>) {
    if (usage) {
        const data: Array<OverviewRow> = [];
        for (let key in usage) {
            data.push({
                duration: key,
                amount: usage[key]
            })
        }
        return data;
    }
    return [];
}

export function convertCategoryExpenseData(categories: Array<any>) {
    if (categories) {
        const data: Array<CategoryExpenseRow> = [];
        for (let key in categories) {
            data.push({
                category: key,
                amount:123
            })
        }
        return data;
    }
    return [];
}