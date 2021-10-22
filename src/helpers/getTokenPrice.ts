import { Currencies, Currency, Money } from "ts-money";
import { ERC20 } from "elf-contracts-typechain/dist/types/ERC20";

export function getTokenPrice<TContract extends ERC20>(
    contract: TContract,
    currency: Currency
  ): Promise<Money> {
    return new Promise( (resolve) => resolve(Money.fromDecimal(.01, currency, Math.round)));
  }
