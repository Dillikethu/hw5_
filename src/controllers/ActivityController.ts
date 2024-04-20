import { Activity } from '../models/ActivityModel';

export const getActivity = async (): Promise<Activity> => {
  const response = await fetch('https://www.boredapi.com/api/activity');
  const data = await response.json();
  return { activity: data.activity };
};
