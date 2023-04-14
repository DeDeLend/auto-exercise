import {HardhatRuntimeEnvironment} from "hardhat/types"

async function deployment(hre: HardhatRuntimeEnvironment): Promise<void> {
  const {deployments, getNamedAccounts, network} = hre
  const { deploy, getArtifact, save } = deployments
  const {deployer} = await getNamedAccounts()

  await deploy("takeProfit", {
    contract: "TakeProfit",
    from: deployer,
    log: true,
    args: [
      "0x5Fe380D68fEe022d8acd42dc4D36FbfB249a76d5",
      "0xec096ea6eB9aa5ea689b0CF00882366E92377371"
    ],
  })

}

deployment.tags = ["take_profit"]
deployment.dependencies = ["tokens"]

export default deployment
