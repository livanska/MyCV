export interface ICvContext {
  isHeaderVisible: boolean;
  setHeaderVisible: (isVisible: boolean) => void;
}

export const defaultCvContext: ICvContext = {
  isHeaderVisible: false,
  setHeaderVisible: () => {},
};
