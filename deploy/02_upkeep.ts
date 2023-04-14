import {HardhatRuntimeEnvironment} from "hardhat/types"

async function deployment(hre: HardhatRuntimeEnvironment): Promise<void> {
  const {deployments, getNamedAccounts, network} = hre
  const {deploy, get, execute} = deployments
  const {deployer} = await getNamedAccounts()

  const TakeProfit = await get("takeProfit")

  await deploy("upkeepTakeProfit", {
    contract: "UpkeepTakeProfit",
    from: deployer,
    log: true,
    args: [TakeProfit.address],
  })

}

deployment.tags = ["upkeep"]
deployment.dependencies = ["tokens", "take_profit"]

export default deployment
