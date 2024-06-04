// src/components/MatchFetcher/MatchFetcher.tsx
import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { Match, ApiResponse } from '../../types';

interface MatchFetcherProps {
  gameName: string;
  tagLine: string;
  mode: string;
  onFetch: (data: Match[]) => void;
  onError: () => void;
  spinning: boolean;
  setSpinning: (value: boolean) => void;
}

const MatchFetcher: React.FC<MatchFetcherProps> = ({
  gameName,
  tagLine,
  mode,
  onFetch,
  onError,
  spinning,
  setSpinning,
}) => {
  const fetchingData = async () => {
    setSpinning(true);
    try {
      const response = await fetch(
        `https://api.tracker.gg/api/v2/valorant/standard/matches/riot/${gameName}%23${tagLine}?type=${mode.toLowerCase()}&season=&agent=all&map=all`
      );
      const responseData: ApiResponse = await response.json();
      onFetch(responseData.data.matches);
    } catch (error) {
      onError();
      console.error('Error fetching data:', error);
    }
    setSpinning(false);
  };

  useEffect(() => {
    fetchingData();
  }, [gameName, tagLine, mode]);

  if (spinning) {
    return <Spin style={{ background: '#242424' }} spinning={spinning} fullscreen />;
  }

  return null;
};

export default MatchFetcher;