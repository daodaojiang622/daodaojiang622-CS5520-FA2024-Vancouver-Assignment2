import React from 'react';
import ItemsList from '../Components/ItemsList'; 

const activities = [
  { id: '1', name: 'Running', date: 'Mon Oct 01 2023', otherData: '30 mins' },
  { id: '2', name: 'Swimming', date: 'Mon Oct 08 2023', otherData: '45 mins' },
  { id: '3', name: 'Cycling', date: 'Mon Oct 15 2023', otherData: '60 mins' },
];

const ActivitiesScreen = () => {
  return (
    <ItemsList data={activities} />
  );
};

export default ActivitiesScreen;
