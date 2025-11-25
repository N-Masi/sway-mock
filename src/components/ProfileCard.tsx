"use client"

import * as React from 'react';
import LeaderDropdown from './LeaderDropdown';
import ProfileAvatar from './ProfileAvatar';
import { Card, CardHeader, CardContent } from '@mui/material';

export type AvatarMedia = {
  id: string,
  link: string,
}

export type Leader = {
  id: string;
  displayNameShort: string;
  displayNameLong: string,
  bio: string,
  avatarMedia: AvatarMedia,
  profileViewpointGroupRels: any
};

const profileMassie: Leader = {
    id: "8d8a77fb-9be3-4b7d-986f-b9552dc6c661",
    displayNameShort: "Congressman Massie",
    displayNameLong: "Thomas Massie",
    bio: "",
    avatarMedia: {
      id: "53c15be9-ca66-48e1-a59e-8b1e77ba39d8",
      link: "https://sway-prod-media.s3.amazonaws.com/uploads/70/2f3175f53d41778399ed02f58f17fa/Screenshot-2025-10-13-at-9.52.36-AM.avif",
    },
    profileViewpointGroupRels: "",
}

export default function ProfileCard() {
    const [selectedLeader, setSelectedLeader] = React.useState<Leader>(profileMassie);
    const [leaders, setLeaders] = React.useState<Leader[]>([]);
    const [loading, setLoading] = React.useState(true);

    return (
        <Card sx={{ 
            maxWidth: 255, 
            margin: 3,
            borderRadius: "25px",
            opacity: 0.9,
            // boxShadow: 0,
        }}>
            <CardHeader
                avatar={
                    <ProfileAvatar
                        selectedLeader={selectedLeader}
                    />
                }
            />
            <CardContent>
                <LeaderDropdown
                    selectedLeader={selectedLeader}
                    setSelectedLeader={setSelectedLeader}
                    leaders={leaders}
                    setLeaders={setLeaders}
                    loading={loading}
                    setLoading={setLoading}
                    defaultLeader={profileMassie}
                />
            </CardContent>
        </Card>
    );
}