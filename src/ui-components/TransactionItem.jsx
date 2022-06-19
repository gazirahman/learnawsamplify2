/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function TransactionItem(props) {
  const { transaction, overrides, ...rest } = props;
  return (
    <View
      width="572px"
      height="59px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "TransactionItem")}
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
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        letterSpacing="0.01px"
        width="265px"
        height="37px"
        position="absolute"
        top="12px"
        left="71px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={transaction?.label}
        {...getOverrideProps(overrides, "Printing")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="20px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="center"
        width="132px"
        height="35px"
        position="absolute"
        top="13px"
        left="362px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"$"}${transaction?.amount}`}
        {...getOverrideProps(overrides, "$120")}
      ></Text>
    </View>
  );
}
