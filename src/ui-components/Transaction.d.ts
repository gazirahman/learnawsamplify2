/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Transaction } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type TransactionProps = React.PropsWithChildren<Partial<ViewProps> & {
    transaction?: Transaction;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Transaction(props: TransactionProps): React.ReactElement;
