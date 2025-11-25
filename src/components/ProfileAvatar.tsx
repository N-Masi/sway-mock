import * as React from 'react';
import { Avatar } from "@mui/material";
import { Leader } from './Dashboard';

type ProfileAvatarProps = {
  selectedLeader: Leader;
};

export default function ProfileAvatar(props: ProfileAvatarProps) {

    const getAvatarSrc = () => {
      if (props.selectedLeader.avatarMedia) {
        return props.selectedLeader.avatarMedia.link;
      } else {
        return "";
      }
    }

    return (
        <Avatar 
          alt={props.selectedLeader.displayNameLong} 
          src={getAvatarSrc()} 
          sx={{ width: 84, height: 84 }}
        />
    );

}
