import { useEffect } from "react";

export const useDocumentTitle = (titleText) => {
  useEffect(() => {
    document.title = `Play Arts | ${titleText}`;
  }, [titleText]);
};
