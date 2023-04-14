import {ethers, deployments} from "hardhat"
import {BigNumber as BN, Signer} from "ethers"
import {solidity} from "ethereum-waffle"
import chai from "chai"
import { UpkeepTakeProfit } from "../typechain-types/contracts/Upkeep.sol/UpkeepTakeProfit"
import { TakeProfit } from "../typechain-types/contracts/TakeProfit.sol/TakeProfit"
const hre = require("hardhat");

chai.use(solidity)
const {expect} = chai

async function main() {
    const {deploy, get, execute} = deployments

    const [
      deployer
    ] = await hre.ethers.getSigners()
    let upkeep = (await hre.ethers.getContract("upkeepTakeProfit")) as UpkeepTakeProfit;
    let take_profit = (await hre.ethers.getContract("takeProfit")) as TakeProfit;
    console.log("upkeep address: ", upkeep.address)
    console.log("takeProfit: ", await upkeep.takeProfit())    

    let tx = await upkeep.checkUpkeep("0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c8")
    console.log(tx)
    console.log(await take_profit.checkTakeProfit(5269))
    console.log("####")
    console.log((await take_profit.indexTokenToTokenId(0)).toString())
    console.log((await take_profit.indexTokenToTokenId(1)).toString())
    console.log((await take_profit.indexTokenToTokenId(2)).toString())

 }

main()
  .then(() => {
	console.log("success")
	process.exit(0)
})
  .catch(e => {
	console.error(e)
	process.exit(1)
  })
