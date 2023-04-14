Users can set take-profit or stop-loss orders using DeDeLend's auto-exercise contract. DeDeLend doesn't rely on any scripts or servers; auto-exercise is a fully on-chain solution powered by Chainlink Automation.

- [GitHub](https://github.com/DeDeLend/auto-exercise) — Source code
- [Auto-Exerciser](https://arbiscan.io/address/0x83ca705E8eEE363b16935D5FCbC3514530d41C74#code) — Contract
- [Upkeep](https://automation.chain.link/arbitrum/105459079710918252270963479132636945083939458524885912784487020071204995125403) — Chainlink Automation that executes transactions

To set up take-profit or stop-loss, we need to:

1. Find the Option ID (the number of your option)
2. Grant approval
3. Set up take-profit or stop-loss.