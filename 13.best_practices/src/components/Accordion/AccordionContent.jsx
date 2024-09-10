import { useAccordionContext } from "./Accordion";
import { useAccordItemContext } from "./AccordionItem";

export default function AccordionContent({ className, children }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordItemContext;

  const isOpen = openItemId === id;

  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}
