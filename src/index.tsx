import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import TrackPlayer from 'react-native-track-player';
import Pages from './entry';
import { minisdkRef } from './utils';

TrackPlayer.registerPlaybackService(() => require('./service/index'));


const MiniApp = forwardRef(({ dataSupper, minisdk }: any, ref) => {
  console.log(dataSupper)
  useEffect(() => {
    minisdkRef.current = minisdk;
  }, []);
  useImperativeHandle(ref, () => ({
    // Do not edit
    getData: () => {
      return 'Mini app data'
    },
  }))
  return (
    <Pages />
  );
});

export default MiniApp;