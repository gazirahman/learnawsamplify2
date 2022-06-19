/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Transaction(props) {
  const { transaction, overrides, ...rest } = props;
  return (
    <View
      width="1159px"
      height="215px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Transaction")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="50px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="362px"
        height="120px"
        position="absolute"
        top="42px"
        left="141px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={transaction?.label}
        {...getOverrideProps(overrides, "Printing")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="50px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="center"
        width="287px"
        height="118px"
        position="absolute"
        top="43px"
        left="792px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={transaction?.amount}
        {...getOverrideProps(overrides, "$120")}
      ></Text>
    </View>
  );
}
