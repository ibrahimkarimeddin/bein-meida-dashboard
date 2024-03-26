import * as React from 'react';
//@ts-ignore
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { useTranslation } from 'react-i18next';

const chartSetting = {
    yAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
        },
    },
};


const BarsDataset = ({dataMonth}:any) => {

  
    const [t] = useTranslation()
    const dataset = dataMonth;
    

    const series = [
        { dataKey: 'visit', label: t('visit'), valueFormatter: (value: number) => `${value}` },
        { dataKey: 'whatsapp', label: t('whatsapp'), valueFormatter: (value: number) => `${value}` }
    ];


    if(!dataMonth){
        return <>
            
        </>;
    }
    return (
        <div className="Card BarChart" >
            <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={series}
                {...chartSetting}
            />
            
        </div>
    );
};

export default BarsDataset;
