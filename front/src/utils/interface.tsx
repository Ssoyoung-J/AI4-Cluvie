export interface Club {
  [key: string]: number | string | undefined;
  id?: number;
  club_id?: number;
  name?: string;
  manager?: number;
  picture?: string;
  intro?: string;
  duration?: number;
  state?: number;
  online?: number;
  offline?: number;
  description?: string;
  views?: number;
  head_count?: number;
  weekday?: number;
  weekend?: number;
  hashtags?: string;
}
