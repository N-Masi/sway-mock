"use client"

import * as React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Autocomplete } from "@mui/material";
import { Leader } from './ProfileCard';

type LeaderDropdownProps = {
  selectedLeader: Leader,
  setSelectedLeader: React.Dispatch<React.SetStateAction<Leader>>,
  leaders: Leader[],
  setLeaders: React.Dispatch<React.SetStateAction<Leader[]>>,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  defaultLeader: Leader,
};

export default function LeaderDropdown(props: LeaderDropdownProps) {

  const handleChange = (event: React.SyntheticEvent, newValue: Leader | null) => {
    if (newValue) {
      props.setSelectedLeader(newValue);
    }
  };

  React.useEffect(() => {
    async function fetchLeaders() {
      try {
        const res = await fetch('/api/sway/getProfiles?role=LEADER');
        const data = await res.json();
        const profilesArray = Array.isArray(data.data.profiles) ? data.data.profiles : [];
        console.log(profilesArray)
        props.setLeaders(profilesArray);
      } catch (error) {
        console.error('Error fetching leaders', error);
      } finally {
        props.setLoading(false);
      }
    }
    fetchLeaders();
  }, []);

  return (
    <Autocomplete
      disablePortal
      options={props.leaders}
      getOptionLabel={(option) => option.displayNameLong}
      getOptionKey={(option) => option.id}
      sx={{ width: 220 }}
      renderInput={(params) => <TextField {...params} label="Leader" />}
      disabled={props.loading}
      defaultValue={props.defaultLeader}
      onChange={handleChange}
    />
  );
}