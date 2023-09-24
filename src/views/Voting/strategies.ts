const votePowerAddress = {
  v0: '0x0bc539dF4291574C000FAE3b35B368Dfeea5De6d',
  v1: '0xf77DB1A60FDb407c40Cd2580d2e8b8938D013Ee7',
}

export const cakeBalanceStrategy = (version: 'v0' | 'v1') => ({
  name: 'contract-call',
  params: {
    address: votePowerAddress[version],
    decimals: 18,
    methodABI: {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
      ],
      name: 'getCakeBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
})

export const cakeVaultBalanceStrategy = (version: 'v0' | 'v1') => ({
  name: 'contract-call',
  params: {
    address: votePowerAddress[version],
    decimals: 18,
    methodABI: {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
      ],
      name: 'getCakeVaultBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
})

export const cakePoolBalanceStrategy = (version: 'v0' | 'v1') => ({
  name: 'contract-call',
  params: {
    address: votePowerAddress[version],
    decimals: 18,
    methodABI: {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
      ],
      name: 'getCakePoolBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
})

export const cakeBnbLpBalanceStrategy = (version: 'v0' | 'v1') => ({
  name: 'contract-call',
  params: {
    address: votePowerAddress[version],
    decimals: 18,
    methodABI: {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
      ],
      name: 'getCakeBnbLpBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
})

export function createPoolsBalanceStrategy(poolAddress, version: 'v0' | 'v1') {
  return {
    name: 'contract-call',
    params: {
      address: votePowerAddress[version],
      decimals: 18,
      args: ['%{address}', poolAddress],
      methodABI: {
        inputs: [
          {
            internalType: 'address',
            name: '_user',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: '_pools',
            type: 'address[]',
          },
        ],
        name: 'getPoolsBalance',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    },
  }
}

export function createTotalStrategy(poolAddress, version: 'v0' | 'v1') {
  return {
    name: 'contract-call',
    params: {
      address: votePowerAddress[version],
      decimals: 18,
      args: ['%{address}', poolAddress],
      methodABI: {
        inputs: [
          {
            internalType: 'address',
            name: '_user',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: '_pools',
            type: 'address[]',
          },
        ],
        name: 'getVotingPower',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    },
  }
}

export function lockedCake(cakeVaultAddress, outputName: 'lockedAmount' | 'lockEndTime') {
  return {
    name: 'contract-call',
    params: {
      address: cakeVaultAddress,
      decimals: 0,
      output: outputName,
      args: ['%{address}'],
      methodABI: {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'userInfo',
        outputs: [
          {
            internalType: 'uint256',
            name: 'shares',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lastDepositedTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'cakeAtLastUserAction',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lastUserActionTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lockStartTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lockEndTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'userBoostedShare',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'locked',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'lockedAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    },
  }
}
