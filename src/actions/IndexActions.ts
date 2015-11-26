//types
export const IndexActionTypes = {
  CHANGE_MESSAGE: "INDEX.CHANGE_MESSAGE"
};

//api interface
export interface IndexActionApi {
  changeMessage?: { (message: { text: string, type: string }): void }
}

//creators
export function changeMessage(message: { text: string, type: string }) {
  return { type: IndexActionTypes.CHANGE_MESSAGE, message };
};
