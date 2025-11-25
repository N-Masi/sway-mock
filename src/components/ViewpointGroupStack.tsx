"use client"

import * as React from 'react';
import { Stack } from '@mui/material';
import { Leader } from './Dashboard';
import ViewpointGroupCard from './ViewpointGroupCard';

export type ViewpointGroup = {
    id: string,
    title: string,
    description: string | null,
    supporterCount: number,
    totalUniqueSupporters: number,
    totalUniqueVoters: number,
    currentSlug: any,
    profileViewpointGroupRels: any,
}

type ViewpointGroupStackProps = {
    selectedLeader: Leader,
}

export default function ViewpointGroupStack(props: ViewpointGroupStackProps) {
    const [viewpointGroups, setViewpointGroups] = React.useState<ViewpointGroup[]>([]);

    React.useEffect(() => {
        async function fetchLeaders() {
          try {
            const res = await fetch(`/api/sway/getViewpointGroups?id=${props.selectedLeader.id}`);
            const data = await res.json();
            const dataArr = Array.isArray(data.data.viewpointGroups) ? data.data.viewpointGroups : [];
            console.log(dataArr);
            setViewpointGroups(dataArr);
          } catch (error) {
            console.error('Error fetching groups', error);
          } finally {
            console.log("successfully got groups!")
          }
        }
        fetchLeaders();
      }, [props.selectedLeader]);

    return (
        <Stack spacing={2} sx={{marginRight: 3, marginTop: 3}}>
            {viewpointGroups.map((viewpointGroup: ViewpointGroup) => (
                <ViewpointGroupCard key={viewpointGroup.id} viewpointGroup={viewpointGroup} />
            ))}
        </Stack>
    )
}
