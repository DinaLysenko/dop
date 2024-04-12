import React from 'react';
import {MoneyType} from "./Banknots";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
        <Banknote color={props.money.banknotes === 'Dollars'? 'green': 'blue'}>
            <Name>
                {props.money.banknotes}
            </Name>
            <Nominal>
                {props.money.value}
            </Nominal>
        </Banknote>
    );
};
type PropsType={
    color: string
}
const Banknote=styled.div<PropsType>`
  width: 400px;
  height: 300px;
  background-color: ${props => props.color};
  margin: 10px;
`
const Name=styled.div`
 font-size: 30px;
`
const Nominal=styled.div`
  font-size: 90px;
`