"use client"

import * as React from 'react';
import LeaderDropdown from './LeaderDropdown';
import ProfileAvatar from './ProfileAvatar';
import { Card, CardHeader, CardContent } from '@mui/material';
import { Leader } from './Dashboard';

type ProfileCardProps = {
  selectedLeader: Leader,
  setSelectedLeader: React.Dispatch<React.SetStateAction<Leader>>,
  leaders: Leader[],
  setLeaders: React.Dispatch<React.SetStateAction<Leader[]>>,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  defaultLeader: Leader,
};

export default function ProfileCard(props: ProfileCardProps) {
    return (
        <Card sx={{ 
            maxWidth: 255, 
            minWidth: 175,
            marginLeft: 3,
            marginTop: 3,
            borderRadius: "25px",
            opacity: 0.9,
            // boxShadow: 0,
        }}>
            <CardHeader
                avatar={
                    <ProfileAvatar
                        selectedLeader={props.selectedLeader}
                    />
                }
            />
            <CardContent>
                <LeaderDropdown
                    selectedLeader={props.selectedLeader}
                    setSelectedLeader={props.setSelectedLeader}
                    leaders={props.leaders}
                    setLeaders={props.setLeaders}
                    loading={props.loading}
                    setLoading={props.setLoading}
                    defaultLeader={props.defaultLeader}
                />
            </CardContent>
        </Card>
    );
}