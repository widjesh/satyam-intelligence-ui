import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function CustomChip({label}) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label={label} color='primary' />
    </Stack>
  );
}