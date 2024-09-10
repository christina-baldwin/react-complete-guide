import { useState, createContext, useContext } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  // if a developer uses the hook in the wrong place and as a result ctx ends up being null
  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>"
    );
  }
  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  // replaced this with the toggle function
  // function openItem(id) {
  //   setOpenItemId(id);
  // }

  // function closeItem() {
  //   setOpenItemId(null);
  // }

  const contextValue = {
    openItemId: openItemId,
    // when the same on both sides can also write:
    toggleItem,

    // openItem: openItem,
    // closeItem,
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
