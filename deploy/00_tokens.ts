import {HardhatRuntimeEnvironment} from "hardhat/types"

async function deployment(hre: HardhatRuntimeEnvironment): Promise<void> {
  const {deployments, getNamedAccounts, network} = hre
  const {deploy, save, getArtifact} = deployments
  const {deployer} = await getNamedAccounts()

  save("HEGOPS", {
    address: "0x5Fe380D68fEe022d8acd42dc4D36FbfB249a76d5",
    abi: await getArtifact("@openzeppelin/contracts/token/ERC721/IERC721.sol:IERC721").then((x) => x.abi),
  })
}

deployment.tags = ["test", "tokens", "arbitrum"]
export default deployment
