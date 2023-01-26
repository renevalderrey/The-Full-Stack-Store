import {
  BadgeDelta,
  Block,
  Card,
  ColGrid,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";
import React from "react";
import { useSelector } from "react-redux";

const CardGridMap = () => {
  const data = useSelector(state=>state.products)

  return (
    <ColGrid
      numColsMd={2}
      numColsLg={3}
      marginTop="mt-6"
      gapX="gap-x-6"
      gapY="gap-y-6"
    >
      {data.map((item, id) => (
        <Card key={id} decoration="top" decorationColor="teal">
          <Flex alignItems="items-start">
            <Block>
              <Text>{item.name}</Text>
              <Metric>{item.price}</Metric>
            </Block>
          </Flex>
          <Flex marginTop="mt-4" spaceX="space-x-2">
            <Text>{`${item.quantity}% (${item.price})`}</Text>
            <Text>{item.price}</Text>
          </Flex>
          <ProgressBar
            percentageValue={item.progress}
            marginTop="mt-3"
            color="orange"
          />
        </Card>
      ))}
    </ColGrid>
  );
};

export default CardGridMap;
