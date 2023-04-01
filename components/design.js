import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const Designs = require('../data/design-principles.json');

export default function Design() {
  return (
    <div style={{
      display: "flex",
      width: "100%"
    }}>
      <div style={{
        width: "50%"
      }}>
        <Accordion allowZeroExpanded>
          {Designs.left.map(design => (
            <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          {design.heading}
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                          {design.content}
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div style={{
        width: "50%"
      }}>
        <Accordion allowZeroExpanded>
          {Designs.right.map(design => (
            <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          {design.heading}
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                          {design.content}
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}