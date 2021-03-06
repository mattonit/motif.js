import React from 'react';
import { Heading, CellGroup, Cell, Text, Input } from 'motif.js';

const InputPage = props => {
  return(
    <div>
      <CellGroup>
        <Cell>
          <Heading className="mb-1">Input</Heading>
          <Text className="docs-page-desc mt-0">Inputs makes possible for user to input text to the page.</Text>
        </Cell>
      </CellGroup>
      <CellGroup>
        <Cell>
          <Heading size="lg">Example</Heading>

          <Input />
          <Input disabled />
          <Input success />
          <Input invalid />

        </Cell>
      </CellGroup>
    </div>
  );
}

export default InputPage;
