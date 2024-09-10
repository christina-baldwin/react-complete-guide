import { useAccordionContext } from "./Accordion.jsx";
import { useAccordItemContext } from "./AccordionItem.jsx";

export default function AccordionTitle({ className, children }) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordItemContext();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
