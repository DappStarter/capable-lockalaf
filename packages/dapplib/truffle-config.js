require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note random unaware hidden arena blue small'; 
let testAccounts = [
"0x641e3b7813fd2eb8fba9dd0febaaf5ff612a1887e797f4c9119bfe1ee279ffe8",
"0xbe47736c62e7dddbe09b09425983c2b545da8d2f6ba5fd9eb9b78fbb64052c74",
"0x07e05093cce885f6a2c11d63f9b317a80fd27bb21f44c646865ac070c3b3de78",
"0x290bbda905ef656af20a2b7c21d3c450cf93e6fccb78c68003d70759db24e37c",
"0x0a8f8ed8511aac7ab747de892b6257957047aa9d9c76bc8d343169d0919a68ca",
"0x12774cc50d676cad5741ee45c72a994f4b7bba2c508fee9814497302821193d6",
"0x9a5cfa8dd3d806a4741f1aaba9621ef6bee14217b26bc8cbf1ac39502465c8d0",
"0x97b64cbaa0dd409a9da194e68a89af9e252bf8b81440a5d15153b2a9a04cbc40",
"0x710c477ecb2d4fd038760c452fdd4ad6c8d35d3d65764b2709f777ae9efe8b5e",
"0xdda179d45d9cbc0d420ac43bf8cd5411f3bc9ce4af065132e8eafe345d9790d5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
