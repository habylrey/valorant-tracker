import React from 'react';
// Optional: If you have other types or utilities, define them here
// Type for an individual match segment, deeply nested inside a match
export type MatchSegment = {
  metadata: {
      id: string;
      hasWon: boolean;
      agentImageUrl: string;
      platformUserHandle: string;
  };
  stats: {
      roundsWon: { value: number };
      roundsLost: { value: number };
      kdRatio: { displayValue: string };
      deaths: { value: number };
      assists: { value: number };
      kills: { value: number };
  };
};

// Type for a match, containing multiple segments
export type Match = {
  segments: MatchSegment[];
  metadata: {
      mapImageUrl: string;
      mapName: string;
      result: string;
      modeName: string;
      timestamp: string;
  };
};


// Type for the API response
export interface ApiResponse {
  data: {
    matches: Match[];
  };
}

// Props for MatchElement component
export type MatchElementProps = {
  error: boolean;
  styles: {
      background: string;
  };
  img: string;
  map: string;
  result: string;
  agentImg: string;
  won: number;
  lost: number;
  kda: string;
  death: number;
  assists: number;
  kills: number;
  mode: string;
  date: string;
  nickname:string;
};
// Define the structure of 'data' prop used by MatchFilling component
export interface MatchFillingData {
  img: string;
  agentImg: string;
  nickname: string;
  result: string;
  won: string;
  lost: string;
  map: string;
  mode: string;
  date: string;
  kills: number;
  death: number;
  assists: number;
  kda: string;
}

// Define the props for the MatchFilling component
export interface MatchFillingProps {
  data: MatchFillingData;
}

// Props for MyHeader component
export interface MyHeaderProps {
  mode: string;
  userName: {
    tagLine: string;
    gameName: string;
  };
}

// Props for MyAside component
export interface MyAsideProps {
  userName: {
    name: {
      gameName: string;
      setGameName: React.Dispatch<React.SetStateAction<string>>;
    };
    tag: {
      tagLine: string;
      setTagLine: React.Dispatch<React.SetStateAction<string>>;
    };
  };
  gamemode: string;
  setGamemode: React.Dispatch<React.SetStateAction<string>>;
}


export interface MyHeaderProps {
  userName: {
    gameName: string;
    tagLine: string;
  };
}

export interface MyAsideProps {
  gamemode: string;
  loading: boolean;
  setGamemode: React.Dispatch<React.SetStateAction<string>>;
  userName: {
    name: {
      gameName: string;
      setGameName: React.Dispatch<React.SetStateAction<string>>;
    };
    tag: {
      tagLine: string;
      setTagLine: React.Dispatch<React.SetStateAction<string>>;
    };
  };
}

export interface MainButtonProps {
  children: React.ReactNode;
  main?: boolean;
  userID: {
    gameName: string;
    tagLine: string;
  };
  userRoot: {
    name: {
      setGameName: React.Dispatch<React.SetStateAction<string>>;
    };
    tag: {
      setTagLine: React.Dispatch<React.SetStateAction<string>>;
    };
  };
}
export interface ContentProps {
  fatal: boolean;
  data: Match[] | null;
}