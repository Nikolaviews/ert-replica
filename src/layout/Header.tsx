'use client';

import React, { useState } from 'react';
import {
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Box,
  Typography,
  Popover,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import RefreshIcon from '@mui/icons-material/Refresh';
import DownloadIcon from '@mui/icons-material/Download';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { format } from 'date-fns';

type HeaderProps = {
  title: string;
  viewToggle?: {
    currentView: 'Week' | 'Month';
    onChange: (view: 'Week' | 'Month') => void;
  };
  onExportClick?: () => void;
  onPrimaryActionClick?: () => void;
  primaryActionLabel?: string;
  showFilter?: boolean;
  onFilterChange?: (text: string) => void;
  showDateRange?: boolean;
};

export default function Header({
  title,
  viewToggle,
  onExportClick,
  onPrimaryActionClick,
  primaryActionLabel = 'Action',
  showFilter = false,
  onFilterChange,
  showDateRange = true,
}: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const open = Boolean(anchorEl);
  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const formattedRange =
    startDate && endDate
      ? `${format(startDate, 'dd/MM/yyyy')} - ${format(endDate, 'dd/MM/yyyy')}`
      : 'Select date range';

  return (
    <Box className="w-full flex flex-wrap items-center justify-between gap-2 px-4 py-2 bg-white shadow-sm">
      {/* Title */}
      <h1 className="text-blue-900 font-semibold">{title}</h1>

      {/* Controls */}
      <Box className="flex flex-wrap items-center gap-2" sx={{ justifyContent: 'flex-end' }}>
        {/* Filter Input */}
        {showFilter && (
          <TextField
            size="small"
            placeholder="Filter…"
            variant="outlined"
            onChange={(e) => onFilterChange?.(e.target.value)}
            sx={{ minHeight: 36 }}
          />
        )}

        {/* Date Range + View Toggle */}
        {viewToggle && (
          <>
            {/* Date Range Selector */}
            {showDateRange && (
              <>
                <Box
                  onClick={handleOpen}
                  className="flex items-center border border-gray-300 rounded-md px-3 py-1.5 cursor-pointer bg-white"
                  sx={{ minHeight: 36, minWidth: 180 }}
                >
                  <CalendarMonthIcon fontSize="small" className="text-gray-600 mr-1" />
                  <Typography variant="body2" noWrap>{formattedRange}</Typography>
                </Box>

                <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                >
                  <Box className="p-4 flex gap-4">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Start date"
                        value={startDate}
                        onChange={(newDate) => setStartDate(newDate)}
                        slotProps={{ textField: { size: 'small' } }}
                      />
                      <DatePicker
                        label="End date"
                        value={endDate}
                        onChange={(newDate) => setEndDate(newDate)}
                        slotProps={{ textField: { size: 'small' } }}
                        minDate={startDate ?? undefined}
                      />
                    </LocalizationProvider>
                  </Box>
                </Popover>
              </>
            )}

            {/* View Toggle */}
            <ToggleButtonGroup
              size="small"
              value={viewToggle.currentView}
              exclusive
              onChange={(_, val) => val && viewToggle.onChange(val)}
              sx={{ height: 36 }}
            >
              <ToggleButton value="Week">Week</ToggleButton>
              <ToggleButton value="Month">Month</ToggleButton>
            </ToggleButtonGroup>

            <Divider orientation="vertical" flexItem />
          </>
        )}

        {/* Primary Action Button (e.g., Sync, Intuit) */}
        {onPrimaryActionClick && (
          <Button
            onClick={onPrimaryActionClick}
            variant="contained"
            size="small"
            sx={{
              bgcolor: 'green',
              '&:hover': { bgcolor: 'darkgreen' },
              height: 36,
              px: 2,
              textTransform: 'none',
            }}
            startIcon={<RefreshIcon />}
          >
            {primaryActionLabel.toUpperCase()}
          </Button>
        )}

        {/* Export Button */}
        {onExportClick && (
          <Button
            onClick={onExportClick}
            variant="outlined"
            size="small"
            sx={{
              height: 36,
              px: 2,
              textTransform: 'none',
            }}
            startIcon={<DownloadIcon />}
          >
            EXPORT
          </Button>
        )}
      </Box>
    </Box>
  );
}
