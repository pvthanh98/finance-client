import { useEffect, useState } from 'react';
import { TableComponent } from '../components/tables/overview-table';
import { OverviewRow } from '../interfaces/overview-row';
import { convertCategoryExpenseData, convertOverviewData } from '../utils/util';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { CategoryExpenseTableComponent } from '../components/tables/category-expense-table';
import { CategoryExpenseRow } from '../interfaces/category-expense-row';
import { MonthlyLimitationTableComponent } from '../components/tables/monthly-limitation-table';
import { MonthlyLimitationRow } from '../interfaces/monthly-limitation-row';

export const MonthlyLimitationPage = () => {
    const [monthlyLimitData, setMonthlyLimitData] = useState<Array<MonthlyLimitationRow>>([]);
    useEffect(() => {
        getOverviewExpense();
    }, []);

    const getOverviewExpense = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/dashboard/monthly-limitation`);
        if (response.data) {
            setMonthlyLimitData([...response.data])
        }
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Typography variant="h5" style={{ fontWeight: "bold", marginTop: "8px" }}>
                    Monthly Limitation
                </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
                <MonthlyLimitationTableComponent rows={monthlyLimitData} />
            </Grid>     
        </Grid>
    )
}