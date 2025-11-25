import * as React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { ViewpointGroup } from './ViewpointGroupStack';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


type ViewpointGroupCardProps = {
    viewpointGroup: ViewpointGroup,
}

export default function ViewpointGroupCard(props: ViewpointGroupCardProps) {

    const total = props.viewpointGroup.totalUniqueSupporters;
    const voters = props.viewpointGroup.totalUniqueVoters;
    const diff = total - voters;
    const options = {
        cutout: "60%",
        plugins: {
        tooltip: {
            callbacks: {
            label: (ctx: any) => {
                const val = ctx.raw;
                const pct = ((val / total) * 100).toFixed(1);
                return ` ${pct}%`;
            },
            },
        },
        },
    };
    const data = {
        labels: ["Supporters Only", "Voters"],
        datasets: [
        {
            data: [diff, voters],
            backgroundColor: ["#d0e2ff", "#4b9cff"],
            hoverBackgroundColor: ["#b8d4ff", "#3b8cef"],
            borderWidth: 0,
        },
        ],
    };

    return (
        <Card sx={{
            borderRadius: "25px",
            opacity: 0.9,
        }}>
            <CardHeader
                title={props.viewpointGroup.title}
            />
            <CardContent>
                <p>Supporters: {props.viewpointGroup.totalUniqueSupporters}</p>
                <p>Voters: {props.viewpointGroup.totalUniqueVoters}</p>
                <div style={{ width: "100%", maxWidth: 250, margin: "0 auto" }}>
                    <Doughnut data={data} options={options}/>
                </div>
            </CardContent>
        </Card>
    )
}
