import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function PreviewStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer

  const [showPreview, setShowPreview] = useState(false);
  const [currentSelected, setCurrentSelected] = useState("");

  function openPreview() {
    setShowPreview(true);
  }

  function closePreview() {
    setShowPreview(false);
    setCurrentSelected("");
  }

  function handleFileClick(e) {
    const clicked = e.currentTarget.getAttribute("data-name");

    if (clicked !== currentSelected) {
      setCurrentSelected(clicked);
      openPreview();
    } else {
      setCurrentSelected("");
      closePreview();
    }
  }

  return (
    <LocalStateProvider
      value={{
        showPreview,
        openPreview,
        closePreview,
        handleFileClick,
        currentSelected,
      }}>
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function usePreview() {
  // we use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { PreviewStateProvider, usePreview };
