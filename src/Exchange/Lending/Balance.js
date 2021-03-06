
/*
 * Info for deposited balances for an address in the Dolomite margin protocol
 */

export default class Balance {
  constructor({ticker, dydx_token_id, margin_supply_interest_rate, margin_borrow_interest_rate, token}, token_info) {

    this.ticker = ticker;
    this.dydxTokenId = dydx_token_id;
    this.supplyInterestRate = margin_supply_interest_rate;
    this.borrowInterestRate = margin_borrow_interest_rate;
    this.token = token;
    this.tokenInfo = token_info;
  }

  static build(balancesAsJson, tokens) {
    return balancesAsJson.map(balanceJson => new Balance(balanceJson, tokens[balanceJson.asset.ticker]));
  }

  static hydrate(balanceJsonObject, globals) {
    const tokens = globals.tokens || {};

    /*const balances = balanceJsonArray.map(balance => {
      balance.token = tokens[balance.ticker];
      return balance;
    });*/

    return Balance.build(balanceJsonObject, tokens);
  }
}