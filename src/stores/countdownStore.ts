import { createStore, produce } from "solid-js/store";

interface CountdownStoreState {
  day: [number, number];
  hour: [number, number];
  minute: [number, number];
  second: [number, number];
}

export const [store, setStore] = createStore<CountdownStoreState>({
  day: [8, 9],
  hour: [23, 24],
  minute: [55, 56],
  second: [41, 42],
});

export const startCountdown = () => {
  setInterval(() => {
    setStore(
      produce((prev) => {
        if (prev.second[0] == 0) {
          prev.second = [59, 0];

          if (prev.minute[0] > 0) {
            prev.minute = [prev.minute[0] - 1, prev.minute[0]];
          } else if (prev.hour[0] > 0) {
            prev.minute = [59, 0];
            prev.hour = [prev.hour[0] - 1, prev.hour[0]];
          } else if (prev.day[0] > 0) {
            prev.minute = [59, 0];
            prev.hour = [24, 0];
            prev.day = [prev.day[0] - 1, prev.day[0]];
          }
        } else {
          prev.second = [prev.second[0] - 1, prev.second[0]];
        }
      })
    );
  }, 1000);
};

export const getCountdownState = () => {
  return store;
};
